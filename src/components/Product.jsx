import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { product, productCategory, productPast } from "../constants";
import { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";

const Product = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [productActive, setProductActive] = useState(1);

  const handleActive = (index) => {
    setProductActive(index);
  };
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
                  <div
                    className={`flex flex-col items-center py-2 ${
                      productActive === item.id ? "active" : ""
                    }`}
                    onClick={() => handleActive(item.id)}
                  >
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
                className={`button-next hover:shadow-custom-shadow w-10 cursor-pointer h-10 text-primary z-10 bg-white p-2 border rounded-full flex items-center justify-center ${
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
          <div className="mt-3 mb-6">
            <div className="grid grid-flow-row gap-6 text-neutral-600 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {product.map((item) => (
                <a href="#" key={item.id}>
                  <div className="relative rounded-sm group">
                    <Swiper
                      spaceBetween={30}
                      navigation={{
                        nextEl: `#sbutton-next-${item.id}`,
                        prevEl: `#sbutton-prev-${item.id}`,
                      }}
                      pagination={{ clickable: true }}
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                    >
                      {item.image.map((image, index) => (
                        <SwiperSlide key={index}>
                          <div className="w-full">
                            <img
                              className="rounded-[10px]"
                              src={image.img}
                              alt={`Product ${index}`}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <div className=" hidden group-hover:block ">
                      <div
                        id={`sbutton-prev-${item.id}`}
                        className="swiper-button-prev after:text-[16px] text-[20px] p-2 w-[30px] h-[30px] bg-white rounded-full absolute left-2 z-10 transform -translate-y-1/2 top-[60%]"
                      >
                        <img
                          src="/assets/images/icons/left-arrow.svg"
                          className="w-[10px] h-[auto]"
                          alt="Previous"
                        />
                      </div>
              
                      <div
                        id={`sbutton-next-${item.id}`}
                        className="swiper-button-next after:text-[16px] text-[20px] p-2 w-[30px] h-[30px] bg-white rounded-full absolute right-2 z-10 transform -translate-y-1/2 top-[60%]"
                      >
                        <img
                          src="/assets/images/icons/right-arrow.svg"
                          className="w-[10px] h-[auto]"
                          alt="Next"
                        />
                      </div>
                    </div>
                    <button className=" absolute py-1 px-4  border-secondary text-primary font-medium bg-white rounded-[50px] top-3 left-3 z-[1]">
                      Live
                    </button>
                    <button className=" absolute w-8 h-8 flex items-center justify-center text-[16px] border-secondary text-primary bg-white rounded-[50px] top-3 right-3 z-[1]">
                      <MdOutlineFileUpload />
                    </button>
                  </div>
                  <div className="mt-3">
                    <p className="text-primary font-medium mb-1">
                      {item.title}
                    </p>
                    <span>{item.short_dis}</span>
                    <p className="text-primary font-medium mt-1">
                      {item.price}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <h1 className="text-3xl font-semibold text-primary">
            Past experiences
          </h1>
          <div className="mt-3 mb-6">
            <div className="grid grid-flow-row gap-6 text-neutral-600 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {productPast.map((item) => (
                <a href="#" key={item.id}>
                  <div className="relative rounded-sm group">
                    <Swiper
                      spaceBetween={30}
                      navigation={{
                        nextEl: `#sbutton-next-${item.id}`,
                        prevEl: `#sbutton-prev-${item.id}`,
                      }}
                      pagination={{ clickable: true }}
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                    >
                      {item.image.map((image, index) => (
                        <SwiperSlide key={index}>
                          <div className="w-full">
                            <img
                              className="rounded-[10px]"
                              src={image.img}
                              alt={`Product ${index}`}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <div className=" hidden group-hover:block ">
                      <div
                        id={`sbutton-prev-${item.id}`}
                        className="swiper-button-prev after:text-[16px] text-[20px] p-2 w-[30px] h-[30px] bg-white rounded-full absolute left-2 z-10 transform -translate-y-1/2 top-[60%]"
                      >
                        <img
                          src="/assets/images/icons/left-arrow.svg"
                          className="w-[10px] h-[auto]"
                          alt="Previous"
                        />
                      </div>
                      <div
                        id={`sbutton-next-${item.id}`}
                        className="swiper-button-next after:text-[16px] text-[20px] p-2 w-[30px] h-[30px] bg-white rounded-full absolute right-2 z-10 transform -translate-y-1/2 top-[60%]"
                      >
                        <img
                          src="/assets/images/icons/right-arrow.svg"
                          className="w-[10px] h-[auto]"
                          alt="Next"
                        />
                      </div>
                    </div>
                    <button className=" absolute py-1 px-4  border-secondary text-primary font-medium bg-white rounded-[50px] top-3 left-3 z-[1]">
                      Live
                    </button>
                    <button className=" absolute w-8 h-8 flex items-center justify-center text-[16px] border-secondary text-primary bg-white rounded-[50px] top-3 right-3 z-[1]">
                      <MdOutlineFileUpload />
                    </button>
                  </div>
                  <div className="mt-3">
                    <p className="text-primary font-medium mb-1">
                      {item.title}
                    </p>
                    <span>{item.short_dis}</span>
                    <p className="text-primary font-medium mt-1">
                      {item.price}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
