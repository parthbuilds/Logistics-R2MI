import formidable from 'formidable';
import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        // Parse form data with formidable
        const form = formidable({
            multiples: false,
            uploadDir: path.join(process.cwd(), 'public/uploads'),
            keepExtensions: true,
            maxFileSize: 5 * 1024 * 1024, 
        });

        const [fields, files] = await new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                if (err) reject(err);
                resolve([fields, files]);
            });
        });

        // Extract form fields
        const { fullname, email, phone, message } = fields;
        const resumeFile = files.resume?.[0];

        // Validate required fields
        if (!fullname || !email || !message) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Configure email transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address
                pass: process.env.EMAIL_PASS, // Your Gmail App Password
            },
        });

        // Prepare email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'parthbuilds@gmail.com',
            subject: `New Job Application from ${fullname}`,
            text: `
                New application received:
                Name: ${fullname}
                Email: ${email}
                Phone: ${phone || 'Not provided'}
                Message: ${message}
            `,
            html: `
                <h2>New Job Application</h2>
                <p><strong>Name:</strong> ${fullname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
            attachments: resumeFile ? [{
                filename: resumeFile.originalFilename,
                path: resumeFile.filepath,
            }] : [],
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Clean up uploaded file
        if (resumeFile) {
            await fs.unlink(resumeFile.filepath);
        }

        return res.status(200).json({
            message: 'Application submitted successfully',
        });

    } catch (error) {
        console.error('Form submission error:', error);

        // Clean up any uploaded files in case of error
        if (error.uploadedFiles) {
            await Promise.all(
                error.uploadedFiles.map(file => fs.unlink(file.filepath).catch(() => {}))
            );
        }

        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ message: 'File size exceeds 5MB limit' });
        }

        return res.status(500).json({
            message: 'Error processing application',
            error: error.message,
        });
    }
}