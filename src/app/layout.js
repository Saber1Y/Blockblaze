import { Chewy } from "next/font/google";
import "./globals.css";
import { Navbar, } from "@/app";


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
      <body className={chewy.className}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
