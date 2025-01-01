import { FcApproval } from "react-icons/fc";
import { FcAdvertising } from "react-icons/fc";
import { FcPuzzle } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc";
import { TabTypes } from "../../../../../types/TabTypes";
export default function TabItems() {


  const tabitem: TabTypes[] = [
    { icon: <FcApproval />, title: "Kaçmaz Teklifler" },
    { icon: <FcAdvertising />, title: "Kampanyalar" },
    { icon: <FcPuzzle />, title: "Kuponlar" },
    { icon: <FcSportsMode />, title: "Sana Özel" },
  ];


  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 gap-3">
        {
            tabitem.map((data,key) => (
                <div className="flex justify-start items-center gap-3 p-4 bg-lightBlue cursor-pointer" key={key}>
                    <div className="text-4xl">{data.icon}</div>
                    <div className="text-white text-xs">{data.title}</div>
                </div>
            ))
        }
    </div>
  );
}
