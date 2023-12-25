import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "First Next-js App",
  description: "First next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <nav>
        <a href="/">home</a>
      </nav>
      <body className={inter.className}>{children}</body>
      <footer>
        <h2>roeibo</h2>
      </footer>{" "}
    </html>
  );
}
