import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { productCategory } from "../constants";
import { useState } from "react";
import ProductItem from "./ProductItem";

const Product = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <>
      <section>
        <div className="w-full px-20 mt-3">
          <div className="relative flex items-center pl-5">
            <Swiper
              spaceBetween={30}
              centeredSlides={false}
              slidesPerGroupAuto={true}
              slidesPerGroup={10}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1400: {
                  slidesPerView: 15,
                  spaceBetween: 40,
                },
                1700: {
                  slidesPerView: 18.4,
                  spaceBetween: 32,
                },
              }}
              navigation={{
                nextEl: isEnd ? null : ".button-next",
                prevEl: isEnd ? null : ".button-prev",
              }}
              onReachBeginning={() => setIsBeginning(true)}
              onFromEdge={() => {
                setIsBeginning(false);
                setIsEnd(false);
              }}
              onReachEnd={() => setIsEnd(true)}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {productCategory.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center py-2 ">
                    <span className="text-[24px] text-secondary font-medium">
                      {item.icon}
                    </span>
                    <p className="text-xs text-secondary font-medium mt-2">
                      {item.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="">
              <div
                className={`button-prev hover:shadow-custom-shadow cursor-pointer absolute bg-white  z-10 left-0 w-10 h-10 text-primary border rounded-full flex items-center justify-center ${
                  isBeginning ? "hidden" : ""
                }`}
              >
                <img
                  src="/assets/images/icons/left-arrow.svg"
                  className="w-[10px] h-[auto]"
                  alt=""
                />
              </div>
              <div
                className={`button-next hover:shadow-custom-shadow w-10 cursor-pointer h-10 text-primary bg-white p-2 border rounded-full flex items-center justify-center ${
                  isEnd ? "hidden" : ""
                }`}
              >
                <img
                  src="/assets/images/icons/right-arrow.svg"
                  className="w-[10px] h-[auto]"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              <div>
                <ProductItem />
              </div>
           
              <ProductItem />
              <ProductItem />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
