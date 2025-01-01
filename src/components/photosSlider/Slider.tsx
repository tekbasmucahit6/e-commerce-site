import { Carousel } from "nuka-carousel";
export default function Slider() {
  return (
    <div>
      <Carousel className="w-full" showArrows wrapMode="wrap" showDots autoplay>
        <img src="./img/sliderimg.jpg" className="min-w-full" alt="Slide 1" />
        <img src="./img/sliderimg.jpg" className="min-w-full" alt="Slide 1" />
        <img src="./img/sliderimg.jpg" className="min-w-full" alt="Slide 1" />
      </Carousel>
    </div>
  );
}
