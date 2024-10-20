"use client";

import { useEffect, useState } from "react";
import Card from "./Card";

function Countries() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-14">
      {data.map((country) => (
        <Card country={country} />
      ))}
    </div>
  );
}

export default Countries;
