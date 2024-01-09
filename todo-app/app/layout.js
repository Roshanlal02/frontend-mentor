import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
  description: "Todo application | Frontend Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={josefin.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
