// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import waffles1 from "/public/assets/snack-1.jpeg";
import waffles2 from "/public/assets/snack-2.jpeg";
import waffles3 from "/public/assets/Waffles3.jpg";
import waffles4 from "/public/assets/Waffles4.jpg";
import waffles5 from "/public/assets/Waffles5.jpg";
import waffles6 from "/public/assets/Waffles6.jpg";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../css/carousel.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default function App() {
  const images = [waffles1, waffles2, waffles3, waffles4, waffles5, waffles6];

  return (
    <>
      <h2>Catálogo de productos</h2>
      <Swiper
        id="catalogo"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image} alt={`Image ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
