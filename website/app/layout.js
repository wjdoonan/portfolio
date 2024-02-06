import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wilson J. Doonan",
  description: "developer, hire web developer, web, programmer, python, html, css, javascript, nodejs",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/1849893713.js" ></script>
      </head>
      <body className={`${inter.className} bg-gray-900`}>
        {children}</body>
    </html>
  );
}