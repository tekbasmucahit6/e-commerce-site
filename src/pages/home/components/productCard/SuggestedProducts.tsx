import { useCallback, useEffect } from "react";
import ProductCard from "./ProductCard";

import axios from "axios";
import { useInView } from "react-intersection-observer";
import { useProductStore } from "../../../../stores/products";
import { useSearchStore } from "../../../../stores/search";
export default function SuggestedProducts() {
  const {
    products,
    setProducts,
    skip,
    setSkip,
    productLoading,
    setProductLoading,
    end,
    setEnd,
  } = useProductStore();

  const { search } = useSearchStore();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const fetchData = useCallback(() => {
    setProductLoading(true);
    axios
      .get("https://dummyjson.com/products?limit=30&skip=" + skip)
      .then((res) => {
        if (res.data.products.length < 30) setEnd(true);
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err))
      .finally(() => setProductLoading(false));
  }, [skip, setProductLoading, setEnd, setProducts]);

  useEffect(() => {
    if (!productLoading && inView && !end) {
      setSkip(skip + 30);
      fetchData();
    }
  }, [inView, end, setSkip, fetchData, skip, productLoading]);

  return (
    <div className="flex flex-col justify-center items-center my-10 gap-5">
      <div className="border-b border-primaryBlue w-full">
        <strong className="text-xl xl:text-3xl lg:text-3xl md:text-3xl">
          Sizin İçin Önerilenler
        </strong>
      </div>
      <div className="flex flex-wrap justify-center items-end gap-16 space-y-16">
        {products
          .filter((item: any) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((item: any) => (
            <ProductCard key={item.id} data={item} />
          ))}
        {productLoading && <div>Loading</div>}
      </div>
      <div ref={ref}>Gör beni</div>
    </div>
  );
}
