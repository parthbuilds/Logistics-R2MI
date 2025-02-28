import SmoothScrollLayout from "../utils/SmoothScrollLayout";

export const metadata = {
  title: "R2MI Logistics",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollLayout>
          {children}
        </SmoothScrollLayout>
      </body>
    </html>
  );
}
