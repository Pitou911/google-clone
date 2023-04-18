"use client";
import React, { useEffect, useState } from "react";

export default function CountryLookup() {
  const [data, setData] = useState({});
  async function fetchText() {
    const url = "https://ipinfo.io/json?token=da852a47147e6c";
    const response = await fetch(url);
    let data_api = await response.json();
    setData(data_api);
  }
  useEffect(() => {
    fetchText();
  }, []);
  return (
    <div>
      {data.city} {data.country}
    </div>
  );
}
