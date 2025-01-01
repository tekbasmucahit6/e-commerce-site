import { useEffect } from "react";
import ProductCard from "./ProductCard";
import fetchHandle from "../../../../hooks/UseFetchGet";
export default function SuggestedProducts() {
  const { data, loading, getData } = fetchHandle();
  useEffect(() => {
    getData({
      baseUrl: "https://fakestoreapi.com",
      endPoint: "/products?limit=8",
    });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className="border-b border-primaryBlue w-full">
        <strong className="text-3xl">Sizin İçin Önerilenler</strong>
      </div>
      <div className="flex flex-wrap justify-center items-end gap-16 space-y-16">
        {loading && loading}
        {data.map((dt, key) => (
          <ProductCard dt={dt} i={key} />
        ))}
      </div>
    </div>
  );
}
