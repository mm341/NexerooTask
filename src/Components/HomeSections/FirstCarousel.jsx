import React from "react";
// import "swiper/swiper-bundle.min.css";
// import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";
// import "swiper/components/pagination/pagination.min.css";
// import SwiperCore, { Pagination } from "swiper";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// SwiperCore.use([Pagination]);
const FirstCarousel = () => {
  const array = [...Array(3)];

  return (
    <div className=" bg-[#eaeaea] h-[400px] overflow-y-hidden">
      <div className=" container mx-auto h-full">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          style={{ height: "100%" }}
        >
          {array?.map((e, i) => (
            <SwiperSlide style={{ height: "100%" }}>
              <div
                key={i}
                style={{ display: "flex", flexDirection: "row", width: "55%" }}
                className=" w-[55%] mx-auto globalRowFlex h-full"
              >
                {/*  left section */}
                <div
                  data-aos="fade-up"
                  className=" flex flex-col gap-8   w-[45%]  justify-center h-full"
                >
                  <div className=" flex flex-col gap-2">
                    <p className=" text-secondary  font-semibold ">
                      Shop to get what you love
                    </p>
                    <p className=" text-[36px] text-[#0000008c]">
                      TimePACKET THAT <br /> make state <br /> Up to{" "}
                      <span className=" font-semibold text-[24px] text-black opacity-80">
                        40% OFF
                      </span>
                    </p>
                  </div>

                  {/*  button */}
                  <div className=" opacity-70 w-[180px] navFirstLeftSectionJuistifyCenter h-[45px] rounded-[10px] cursor-pointer bg-primary">
                    Start buying
                  </div>
                </div>

                {/*  right section */}
                <img
                  data-aos="fade-left"
                  src="https://electro.madrasthemes.com/wp-content/uploads/2019/01/Smartphones.png"
                  loading="lazy"
                  alt="img"
                  className="h-[500px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FirstCarousel;
