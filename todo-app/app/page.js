import ThemeSwitch from "@/components/ThemeSwitch";
import Image from "next/image";
import bgDeskLight from "../public/images/bg-desktop-light.jpg";
import bgDeskDark from "../public/images/bg-desktop-dark.jpg";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between bg-very-light-gray dark:bg-very-dark-blue">
      <section className="bg-fixed">
        <Image src={bgDeskLight} style={{width: '100vw', height: 'auto'}} alt="Background Light" className="block dark:hidden" />
        <Image src={bgDeskDark} style={{width: '100vw', height: 'auto'}} alt="Background Dark" className="hidden dark:block" />
      </section>
      <section className="absolute w-[40%] min-h-screen py-[5%]">
        <div className="flex justify-between">
        <h1 className="text-very-light-gray text-3xl tracking-[.5em] font-extrabold">TODO</h1>
          <ThemeSwitch />
        </div>
      </section>
    </main>
  );
}
