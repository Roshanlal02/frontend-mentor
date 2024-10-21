"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Home() {
  const pathname = usePathname();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha${pathname}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="">
      <main className="mt-[9%]">
        <div className="flex justify-between mx-16 my-12">
          <Link
            href="/"
            className="flex items-center gap-2 bg-light-mode-elements dark:bg-dark-mode-elements px-8 py-2 rounded-md shadow-md"
          >
            <FaArrowLeftLong /> Back
          </Link>
        </div>
        <div className="mx-16 mb-12 flex gap-16 justify-between items-center">
          <div className="w-[50%]">
            <Image
              src={data[0]?.flags?.svg}
              alt={data[0]?.flags?.alt}
              width={200}
              height={200}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="w-[50%] flex flex-col gap-10">
            <h2 className="text-2xl font-bold">{data[0]?.name?.common}</h2>
            <div className="flex flex-row w-full justify-between">
              <div className="flex flex-col">
                <text className="font-semibold">
                  Native Name:{" "}
                  <span className="font-normal">
                    {data.length > 0
                      ? Object?.keys(data[0]?.name?.nativeName)
                          ?.map((i) => data[0]?.name?.nativeName[i]?.common)
                          .join(", ")
                      : ""}
                  </span>
                </text>
                <text className="font-semibold">
                  Population:{" "}
                  <span className="font-normal">{data[0]?.population}</span>
                </text>
                <text className="font-semibold">
                  Region: <span className="font-normal">{data[0]?.region}</span>
                </text>
                <text className="font-semibold">
                  Sub Region:{" "}
                  <span className="font-normal">{data[0]?.subregion}</span>
                </text>
                <text className="font-semibold">
                  Capital:{" "}
                  <span className="font-normal">
                    {data[0]?.capital.join(", ")}
                  </span>
                </text>
              </div>
              <div className="flex flex-col">
                <text className="font-semibold">
                  Top Level Domain:{" "}
                  <span className="font-normal">{data[0]?.tld.join(", ")}</span>
                </text>
                <text className="font-semibold">
                  Currencies:{" "}
                  <span className="font-normal">
                    {data.length > 0
                      ? Object?.keys(data[0]?.currencies)
                          ?.map((i) => data[0]?.currencies[i]?.name)
                          .join(", ")
                      : ""}
                  </span>
                </text>
                <text className="font-semibold">
                  Languages:{" "}
                  <span className="font-normal">
                    {data.length > 0
                      ? Object?.keys(data[0]?.languages)
                          ?.map((i) => data[0]?.languages[i])
                          .join(", ")
                      : ""}
                  </span>
                </text>
              </div>
            </div>
            <div className="flex gap-2">
              <text className="font-semibold">Border Countries: </text>
              <span className="font-normal">
                {data.length > 0 && data[0]?.borders?.length > 0 ? (
                  <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-2">
                    {data[0]?.borders?.map((i) => (
                      <Link
                        key={i}
                        href={i}
                        className="border border-gray-400 shadow-md flex justify-center px-4 py-1 rounded-sm text-sm"
                      >
                        {i}
                      </Link>
                    ))}
                  </div>
                ) : (
                  "No border countires"
                )}
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}