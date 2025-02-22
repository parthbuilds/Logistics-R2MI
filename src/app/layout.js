import SmoothScrollLayout from "./utils/SmoothScrollLayout";

export const metadata = {
  title: "R2X",
  description: "R2X",
  keywords: "R2X",
  author: "R2X",
  image: "/images/logo.svg",
  siteUrl: "https://r2x.in",
  siteName: "R2X",
  siteLanguage: "en",
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
