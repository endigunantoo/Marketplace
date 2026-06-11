import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bannerMobil from "../assets/banner/Benner mobil SUV.png";
import bannerTV from "../assets/banner/Benner tv.png";
import bannerPC from "../assets/banner/Benner Pc Gaming.png";

const Hero = () => {
return ( <section className="max-w-[1100px] mx-auto mt-6 px-4 md:px-0">


  <div
    className="
      relative
      bg-white
      rounded-[30px]
      p-4 md:p-10
      shadow-sm
    "
  >

    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={{
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
      }}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      loop={true}
    >

      {/* Slide 1 */}
      <SwiperSlide>
        <div className="flex items-center justify-center gap-4">

          <img
            src={bannerTV}
            alt="TV"
            className="
              hidden md:block
              w-[240px]
              h-[180px]
              object-cover
              rounded-[30px]
              opacity-50
              blur-[1px]
            "
          />

          <img
            src={bannerMobil}
            alt="Mobil SUV"
            className="
              w-full
              md:w-[500px]
              h-[180px]
              md:h-[220px]
              object-cover
              rounded-[30px]
            "
          />

          <img
            src={bannerPC}
            alt="PC Gaming"
            className="
              hidden md:block
              w-[240px]
              h-[180px]
              object-cover
              rounded-[30px]
              opacity-50
              blur-[1px]
            "
          />

        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="flex items-center justify-center gap-4">

          <img
            src={bannerMobil}
            alt="Mobil SUV"
            className="
              hidden md:block
              w-[240px]
              h-[180px]
              object-cover
              rounded-[30px]
              opacity-50
              blur-[1px]
            "
          />

          <img
            src={bannerTV}
            alt="TV"
            className="
              w-full
              md:w-[500px]
              h-[180px]
              md:h-[220px]
              object-cover
              rounded-[30px]
            "
          />

          <img
            src={bannerPC}
            alt="PC Gaming"
            className="
              hidden md:block
              w-[240px]
              h-[180px]
              object-cover
              rounded-[30px]
              opacity-50
              blur-[1px]
            "
          />

        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="flex items-center justify-center gap-4">

          <img
            src={bannerTV}
            alt="TV"
            className="
              hidden md:block
              w-[240px]
              h-[180px]
              object-cover
              rounded-[30px]
              opacity-50
              blur-[1px]
            "
          />

          <img
            src={bannerPC}
            alt="PC Gaming"
            className="
              w-full
              md:w-[500px]
              h-[180px]
              md:h-[220px]
              object-cover
              rounded-[30px]
            "
          />

          <img
            src={bannerMobil}
            alt="Mobil SUV"
            className="
              hidden md:block
              w-[240px]
              h-[180px]
              object-cover
              rounded-[30px]
              opacity-50
              blur-[1px]
            "
          />

        </div>
      </SwiperSlide>

    </Swiper>

    <div
      className="
        custom-prev
        absolute
        left-2 md:left-[70px]
        top-[45%]
        -translate-y-1/2
        z-10
        bg-blue-600
        text-white
        w-10 h-10 md:w-12 md:h-12
        rounded-full
        flex
        items-center
        justify-center
        cursor-pointer
        shadow-lg
      "
    >
      <FaArrowLeft />
    </div>

    <div
      className="
        custom-next
        absolute
        right-2 md:right-[70px]
        top-[45%]
        -translate-y-1/2
        z-10
        bg-blue-600
        text-white
        w-10 h-10 md:w-12 md:h-12
        rounded-full
        flex
        items-center
        justify-center
        cursor-pointer
        shadow-lg
      "
    >
      <FaArrowRight />
    </div>

  </div>

</section>

);
};

export default Hero;
