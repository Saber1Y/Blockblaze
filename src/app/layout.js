import { Chewy } from "next/font/google";
import "./globals.css";

const chewy = Chewy({
  weight: '400', 
  subsets: ['latin'], 
});

export const metadata = {
  title: "BlockBlaze",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={chewy.className}>{children}</body>
    </html>
  );
}
