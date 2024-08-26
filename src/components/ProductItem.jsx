import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { productImage } from "../constants";

const ProductItem = () => {
  return (
    <div className="relative">
      {" "}
      {/* Parent container should be relative */}
      <Swiper
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {productImage.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <img src={item.img} alt={`Product ${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom navigation buttons placed outside Swiper */}
      <div className="swiper-button-prev after:text-[16px] text-[20px] p-2 w-[40px] h-[40px] bg-red-500 text-white rounded-full hover:bg-red-700 hover:scale-110 absolute left-0 top-1/2 transform -translate-y-1/2">
        <img
          src="/assets/images/icons/left-arrow.svg"
          className="w-[10px] h-[auto]"
          alt=""
        />
      </div>
      <div className="swiper-button-next after:text-[16px] text-[20px] p-2 w-[40px] h-[40px] bg-red-500 text-white rounded-full hover:bg-red-700 hover:scale-110 absolute right-0 top-1/2 transform -translate-y-1/2">
        <img
          src="/assets/images/icons/right-arrow.svg"
          className="w-[10px] h-[auto]"
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductItem;
