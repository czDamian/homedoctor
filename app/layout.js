import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/comps/Header";
import Footer from "@/comps/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Home Doctor",
  description: "Home Doctor - A practical guide for every household",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
