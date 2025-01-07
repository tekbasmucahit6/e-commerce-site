import { useParams } from "react-router-dom";
import { useScrollTop } from "../../hooks/useScrollTop";
import { useProductStore } from "../../stores/products";
import ProductCard from "../home/components/productCard/ProductCard";

export default function Test() {
  const { id } = useParams();
  const { products, editProduct } = useProductStore();

  const product = products.find((product: any) => product.id == id);

  const handleEdit = (e: any) => {
    e.preventDefault();
    const newProduct = { ...product, title: e.target[0].value };

    editProduct(newProduct);
  };

  useScrollTop();

  return (
    <>
      <div className="">
        <ProductCard data={product} />
        <form onSubmit={handleEdit}>
          <input
            type="text"
            spellCheck={false}
            className="bg-neutral-500 text-white outline-none p-2 rounded-md"
            placeholder="İsim"
            defaultValue={product.title}
          />
        </form>
      </div>
    </>
  );
}
