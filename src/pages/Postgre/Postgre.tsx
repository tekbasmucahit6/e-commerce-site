import { useEffect } from "react";

import axios from "axios";
import { useInView } from "react-intersection-observer";
import { usePostgreStore } from "../../stores/postgre";
export default function Postgre() {
  const {
    products,
    setProducts,

    productLoading,
    setProductLoading,

    setEnd,
  } = usePostgreStore();

  const { ref } = useInView({
    threshold: 0,
  });

  const fetchData = () => {
    setProductLoading(true);
    axios
      .get("http://localhost:5000/postgre")
      .then((res) => {
        setProducts(res.data.users);
      })
      .catch((err) => console.log(err))
      .finally(() => setProductLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-10 gap-5">
      <div className="border-b border-primaryBlue w-full">
        <strong className="text-xl xl:text-3xl lg:text-3xl md:text-3xl">
          Sizin İçin Önerilenler
        </strong>
      </div>
      <div className="flex flex-wrap justify-center items-end gap-16 space-y-16">
        {products.map((item: any) => (
          <div key={item.id}>{item.username}</div>
        ))}
        {productLoading && <div>Loading</div>}
      </div>
      <div ref={ref}>Gör beni</div>
    </div>
  );
}
