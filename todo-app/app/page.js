import ThemeSwitch from "@/components/ThemeSwitch";
import Image from "next/image";
import bgDeskLight from "../public/images/bg-desktop-light.jpg";
import bgDeskDark from "../public/images/bg-desktop-dark.jpg";
import Input from "@/components/Input";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between">
      <section className="bg-fixed">
        <Image
          src={bgDeskLight}
          style={{ width: "100vw" }}
          alt="Background Light"
          className="block dark:hidden h-auto max-sm:h-36"
          priority
        />
        <Image
          src={bgDeskDark}
          style={{ width: "100vw" }}
          alt="Background Dark"
          className="hidden dark:block h-auto max-sm:h-36"
          priority
        />
      </section>
      <section className="absolute w-[38%] max-sm:w-[80%] max-md:w-[60%] min-h-screen max-sm:py-[15%] py-[5.5%] flex flex-col gap-7">
        <section id="titleAndModeSec">
          <div className="flex justify-between">
            <h1 className="text-very-light-gray text-4xl tracking-[.5em] font-extrabold max-sm:text-3xl">
              TODO
            </h1>
            <ThemeSwitch />
          </div>
        </section>
        <section id="inputSec" className="mt-3 max-sm:mt-0">
          <Input />
        </section>
        <section id="listSec" className="mt-3 max-sm:mt-0">
          <TodoList />
        </section>
        <section id="helperTextSec" className="mt-3 justify-center flex max-sm:text-sm">
          Drag and drop to reorder list
        </section>
      </section>
    </main>
  );
}
