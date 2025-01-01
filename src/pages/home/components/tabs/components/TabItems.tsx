import { FcApproval } from "react-icons/fc";
import { FcAdvertising } from "react-icons/fc";
import { FcPuzzle } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc";
import { tabTypes } from "../../../types/types";
export default function TabItems() {


  const tabitem: tabTypes[] = [
    { icon: <FcApproval />, title: "Kaçmaz Teklifler" },
    { icon: <FcAdvertising />, title: "Kampanyalar" },
    { icon: <FcPuzzle />, title: "Kuponlar" },
    { icon: <FcSportsMode />, title: "Sana Özel" },
  ];


  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 gap-2">
        {
            tabitem.map((data,key) => (
                <div className="flex justify-center items-center gap-3 p-4 bg-lightBlue rounded-20 cursor-pointer" key={key}>
                    <div className="text-4xl">{data.icon}</div>
                    <div className="text-white text-xs">{data.title}</div>
                </div>
            ))
        }
    </div>
  );
}
