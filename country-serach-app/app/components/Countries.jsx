"use client";

import { useEffect, useState } from "react";
import Card from "./Card";
import { Select, Input } from "antd";
import { IoSearchSharp } from "react-icons/io5";

function Countries() {
  const [data, setData] = useState([]);
  const [regions, setRegion] = useState([]);
  useEffect(() => {
    let regionList = [];
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        data.forEach((i) => {
          if (regionList.indexOf(i.region) === -1) {
            regionList.push(i.region);
            console.log(i.region);
          }
        });
        const list = [];
        regionList.forEach((i) => list.push({ value: i, label: i }));
        setRegion(list);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const selectRegion = (e) => {
    fetch(`https://restcountries.com/v3.1/region/${e.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleInputSearch = (e) => {
    if (e.target.value.length > 0) {
      fetch(
        `https://restcountries.com/v3.1/name/${e.target.value.toLowerCase()}?fullText=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error), setData([]);
        });
    } else {
      fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  };

  return (
    <>
      <div className="flex justify-between mx-16 my-12">
        <Input
          size="middle"
          placeholder="Search for a country..."
          style={{ width: "30%", padding: "1% 2%" }}
          prefix={<IoSearchSharp />}
          onChange={handleInputSearch}
        />
        <Select
          defaultValue="Filter by Region"
          size="large"
          style={{ width: 200 }}
          onChange={selectRegion}
          options={regions?.length > 0 ? regions : []}
          loading={regions?.length === 0}
        />
      </div>
      <div className="mx-16 mb-12">
        <div className="grid grid-cols-4 gap-14 max-sm:grid-cols-1 max-md:grid-cols-2">
          {data.length > 0 ? (
            data?.map((country, index) => (
              <Card country={country} key={index} />
            ))
          ) : (
            <>No Countries found</>
          )}
        </div>
      </div>
    </>
  );
}

export default Countries;
