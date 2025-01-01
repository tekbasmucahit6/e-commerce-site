import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full flex justify-center items-center h-[500px]">
      <div className="grid grid-cols-2 gap-5 text-primaryBlue">
            <div className="border-r-2 border-primaryBlue flex justify-center items-center">
                <strong className="text-3xl">404</strong>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
                <div>
                 Upss! yanlış konumadasın sanırım
                </div>
                <div>
                    <Link to={"/"} className="">Anasayfa</Link>
                </div>
            </div>
      </div>
    </div>
  );
}
