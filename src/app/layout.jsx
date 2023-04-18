import Footer from "@/components/Footer";
import "./globals.css";
import Head from "./head";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head />
      <body>
        {children}
        {/* Footer */}
        <Footer/>

        </body>
    </html>
  );
}
