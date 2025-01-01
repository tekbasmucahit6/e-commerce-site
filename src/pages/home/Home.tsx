import Slider from "../../components/photosSlider/Slider";
import UseHelmet from "../../hooks/UseHelmet";
import SuggestedProducts from "./components/productCard/SuggestedProducts";
import Tabs from "./components/tabs/Tabs";

export default function Home() {
  return (
    <>
      <UseHelmet title="Zylo | Anasayfa" description="Zylo | Anasayfa" keywords="anasayfa" />
      <div className="flex flex-col justify-start items-center w-full z-0">
        <Slider />
        <Tabs />
        <SuggestedProducts />
      </div>
    </>
  );
}
