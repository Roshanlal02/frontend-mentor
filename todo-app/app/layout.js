import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ReduxProvider } from "@/redux/provider";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
  description: "Todo application | Frontend Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={josefin.className}>
        <ReduxProvider>
          <Providers>{children}</Providers>
        </ReduxProvider>
      </body>
    </html>
  );
}
