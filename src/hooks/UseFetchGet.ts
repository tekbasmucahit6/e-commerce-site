import { useState } from "react";
import { FetchTypes } from "../types/FetchTypes";
import { DataTypes } from "../types/DataTypes";


function fetchHandle() {
  const [data, setData] = useState<DataTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>("");

  const getData = async ({ baseUrl, endPoint }: FetchTypes) => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}${endPoint}`);
      const jsonData:DataTypes[] = await response.json()
      if (response) {
        console.log(jsonData)
        setData(jsonData);
      }
    } catch (error) {
      setError(error);
    }
  };

  return {data, loading, error, getData};
}

export default fetchHandle;
