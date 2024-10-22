import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({country}) {
  return (
    <Link href={country?.cca3} className="bg-light-mode-elements dark:bg-dark-mode-elements drop-shadow-md rounded-md">
      <div>
        <Image
          src={country?.flags?.svg}
          alt={country?.flags?.alt ?? ""}
          width={200}
          height={200}
          style={{ width: "auto", height: "auto" }}
          className="rounded-t-md"
        />
      </div>
      <div className="px-6 pt-6 pb-8">
        <h2 className="pb-4 font-semibold text-lg">{country?.name?.common}</h2>
        <p className="font-semibold pb-1">
          Population: <span className="font-normal">{country?.population}</span>
        </p>
        <p className="font-semibold pb-1">
          Region: <span className="font-normal">{country?.region}</span>
        </p>
        <p className="font-semibold pb-1">
          Capital: <span className="font-normal">{country?.capital?.join(", ")}</span>
        </p>
      </div>
    </Link>
  );
}

export default Card;
