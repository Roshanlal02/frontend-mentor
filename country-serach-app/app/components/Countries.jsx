"use client";

import { useEffect, useState } from "react";
import Card from "./Card";
import { Select, Input } from "antd";
import { IoSearchSharp } from "react-icons/io5";
import Spinner from "./Spinner";

function Countries() {
  const [data, setData] = useState([]);
  const [regions, setRegion] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const selectRegion = (e) => {
    setLoading(true);
    fetch(`https://restcountries.com/v3.1/region/${e.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleInputSearch = (e) => {
    setLoading(true);
    if (e.target.value.length > 0) {
      fetch(
        `https://restcountries.com/v3.1/name/${e.target.value.toLowerCase()}?fullText=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error), setData([]);
        });
    } else {
      fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  };

  return (
    <>
      <div className="flex flex-row max-sm:flex-col max-sm:gap-8 justify-between mx-16 my-12 max-md:mt-28 max-md:mb-12">
        <div className="w-[30%] max-sm:w-full flex">
          <Input
            size="middle"
            placeholder="Search for a country..."
            style={{ padding: "1% 2%" }}
            prefix={<IoSearchSharp />}
            onChange={handleInputSearch}
            className="dark:!bg-dark-mode-elements bg-light-mode-elements dark:!text-dark-mode-text !text-light-mode-text !border-0 !rounded-md !shadow-md"
          />
        </div>
        <div>
          <Select
            defaultValue="Filter by Region"
            size="large"
            style={{ width: 200 }}
            onChange={selectRegion}
            options={regions?.length > 0 ? regions : []}
            loading={regions?.length === 0}
            className="[&>div]:dark:!bg-dark-mode-elements [&>div]:bg-light-mode-elements [&>div]:dark:!text-dark-mode-text [&>div]:!text-light-mode-text [&>div]:!border-0 [&>div]:!rounded-md [&>div]:!shadow-md"
          />
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="mx-16 mb-12 max-sm:mx-24">
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
      )}
    </>
  );
}

export default Countries;
