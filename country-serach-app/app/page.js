import Countries from "./components/Countries";

export default function Home() {
  return (
    <div className="">
      <main className="mt-[9%]">
        <div className="flex justify-between mx-16 my-12">
          <input />
          <input />
        </div>
        <div className="mx-16 mb-12">
          <Countries />
        </div>
      </main>
    </div>
  );
}
