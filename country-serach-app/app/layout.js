import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ThemeSwitch from "./components/ThemeSwitcher";

const josefin = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata = {
  title: "Countries Application",
  description: "Search any country | Country search application | Frontend Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${josefin.className} bg-very-light-gray dark:bg-very-dark-grayish-blue-2 text-light-mode-text dark:text-dark-mode-text`}
      >
        <Providers>
          <header className="flex justify-between px-16 py-6 bg-light-mode-elements dark:bg-dark-mode-elements shadow-md fixed top-0 w-full z-50">
            <h1 className="text-2xl font-bold">Where in the world?</h1>
            <ThemeSwitch />
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
