import { DataTypes } from "../../../../types/DataTypes";
import { FaRegHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
interface ProductCardTypes {
  data: DataTypes;
}
export default function ProductCard({ data }: ProductCardTypes) {
  return (
    <div className="productCardEvent">
      <div className="flex flex-col justify-start items-center gap-2 h-full">
        <Link to={`/test/${data.id}`} className="w-full relative">
          <img
            src={data ? data.thumbnail : ""}
            className=" w-[225px] h-[300px]"
            alt=""
          />
          <div className="absolute bg-white text-2xl shadow-xl cursor-pointer rounded-full p-2 top-2 right-0">
            <FaRegHeart />
          </div>
        </Link>

        <div className="w-full text-lg text-primaryBlue">
          <strong className="text-sm">{data.title}</strong>
        </div>

        <div className="flex flex-col justify-end items-start h-full w-full">
          <div className="flex justify-start items-end">
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
          <div className="flex jsutify-center items-center gap-3">
            <strong>{data.rating.rate}</strong>-
            <strong>{data.rating.count}</strong>
          </div>
        </div>

        <div className="w-full h-full flex justify-between items-end text-2xl">
          <strong>{data.price} TL</strong>
          <button className="text-sm bg-primaryBlue px-3 py-2 rounded-10 text-white shadow-lg">
            Sepete ekle
          </button>
        </div>
      </div>
    </div>
  );
}
