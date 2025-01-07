import { SlBasket } from "react-icons/sl";
import { AiOutlineUser } from "react-icons/ai";
import { IoDiamond } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSearchStore } from "../../stores/search";

export default function Header() {
  const { setSearch } = useSearchStore();

  return (
    <div className="w-full compBackColor flex justify-center items-center text-white sticky top-0 z-50">
      {/* template */}
      <div className="templateWidth w-full py-3 px-5">
        {/* header icon handle */}
        <div className="flex items-center justify-between gap-5 py-3">
          {/* icon and site title handle */}
          <div className="flex justify-start items-center">
            <Link to={"/"}>
              <strong className="text-2xl flex justify-center items-center gap-2">
                <IoDiamond /> Zylo
              </strong>
            </Link>
          </div>

          <div className="flex justify-center items-center w-full max-w-[400px] max-sm:hidden">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="w-full rounded-20 py-2 px-3 focus:outline-none text-primaryBlue "
              placeholder="Ürün Aramaya Ne Dersin?"
            />
          </div>

          <div className="flex justify-end items-center text-2xl gap-6">
            <Link to={"/test"} className="">
              <SlBasket className="min-w-[20px]" />
            </Link>
            <Link to={"/login"}>
              <AiOutlineUser />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
