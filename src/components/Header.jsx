import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [activeTab, setActiveTab] = useState("stays");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${isSticky ? "sticky top-0 bg-white shadow-md" : ""} z-10`}
      >
        <div className="w-full px-20 mx-auto font-custom">
          <div className="flex justify-between items-start pt-3">
            <div className="logo">
              <img
                src="/assets/images/logo.png"
                className="w-[118px] h-[auto]"
                alt="Logo"
              />
            </div>
            <form action="">
              <div className="flex flex-col items-center justify-center min-w-[850px]">
                <div className="flex space-x-4 my-4">
                  <button
                    className={` text-base pb-3 ${
                      activeTab === "stays"
                        ? "text-primary  font-medium "
                        : " text-secondary font-normal "
                    }`}
                    type="button"
                    onClick={() => setActiveTab("stays")}
                  >
                    Stays
                  </button>
                  <button
                    type="button"
                    className={`text-base pb-3 ${
                      activeTab === "experiences"
                        ? "text-primary font-medium "
                        : " text-secondary font-normal "
                    }`}
                    onClick={() => setActiveTab("experiences")}
                  >
                    Experiences
                  </button>
                </div>

                {/* Content Display */}
                {activeTab === "stays" && (
                  <div className="flex justify-center items-center w-full">
                    <div className="grid grid-cols-6  gap-1 justify-between border shadow-custom-shadow border-third rounded-[32px]  w-full">
                      <div className="hover:bg-third col-span-2 w-66 cursor-pointer hover:rounded-[32px] py-[14px] px-[32px]">
                        <button className="flex flex-col" type="button">
                          <label
                            htmlFor="destination"
                            className="text-xs font-medium"
                          >
                            Where
                          </label>
                          <input
                            id="destination"
                            type="text"
                            placeholder="Search destinations"
                            className="border-none bg-transparent placeholder:text-[12px] outline-none"
                          />
                        </button>
                      </div>

                      <button
                        type="button"
                        className="hover:bg-third relative before:contents hover:border-none w-full cursor-pointer hover:rounded-[32px] py-[14px] px-[24px] flex flex-col"
                      >
                        <span className="absolute inset-0 bg-transparent border-l border-r h-8 hover:border-none top-4"></span>
                        <p className="text-xs font-medium">Check in</p>
                        <span className="text-xs bg-transparent text-secondary">
                          add dates
                        </span>
                      </button>

                      <button
                        type="button"
                        className="hover:bg-third relative w-full cursor-pointer hover:rounded-[32px] py-[14px] px-[24px] flex flex-col"
                      >
                        <span className="absolute inset-0 bg-transparent  border-r h-8 hover:border-none top-4"></span>
                        <p className="text-xs font-medium">Check in</p>
                        <span className="text-xs bg-transparent text-secondary">
                          add dates
                        </span>
                      </button>
                      <div className="items-center hover:border-none col-span-2 w-66 hover:bg-third cursor-pointer hover:rounded-[32px] py-[14px] px-[32px] flex justify-between">
                        <div>
                          <p className="text-xs font-medium">Check in</p>
                          <span className="text-xs bg-transparent text-secondary">
                            add dates
                          </span>
                        </div>
                        <button className="bg-pink-500 text-white p-2 rounded-full">
                          <FaSearch />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "experiences" && (
                  <div className="flex justify-center items-center w-full">
                    <div className="grid grid-cols-3  gap-1 justify-between border shadow-custom-shadow border-third rounded-[32px]  w-full">
                      <div className="hover:bg-third  w-66 cursor-pointer hover:rounded-[32px] py-[14px] px-[32px]">
                        <button className="flex flex-col" type="button">
                          <label
                            htmlFor="destination"
                            className="text-xs font-medium"
                          >
                            Where
                          </label>
                          <input
                            id="destination"
                            type="text"
                            placeholder="Search destinations"
                            className="border-none bg-transparent placeholder:text-[12px] outline-none"
                          />
                        </button>
                      </div>

                      <button
                        type="button"
                        className="hover:bg-third relative before:contents hover:border-none w-full cursor-pointer hover:rounded-[32px] py-[14px] px-[24px] flex flex-col"
                      >
                        <span className="absolute inset-0 bg-transparent border-l border-r h-8 hover:border-none top-4"></span>
                        <p className="text-xs font-medium">Date</p>
                        <span className="text-xs bg-transparent text-secondary">
                          add dates
                        </span>
                      </button>
                      <div className="items-center hover:border-none  w-66 hover:bg-third cursor-pointer hover:rounded-[32px] py-[14px] px-[32px] flex justify-between">
                        <div>
                          <p className="text-xs font-medium">Check out</p>
                          <span className="text-xs bg-transparent text-secondary">
                            add dates
                          </span>
                        </div>
                        <button className="bg-pink-500 text-white p-2 rounded-full">
                          <FaSearch />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </form>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="font-custom text-primary font-medium te cursor-pointer text-[16px]"
              >
                Airbnb your home
              </a>
              <div className="p-3 hover:bg-third hover:rounded-full cursor-pointer">
                <span className="text-[16px]">
                  <RiGlobalLine />
                </span>
              </div>
              <div className=" p-3 hover:shadow-custom-shadow transition rounded-full ">
                <span className="text-[30px] text-secondary hover:rounded-full hover:bg-third cursor-pointer ">
                  <FaUserCircle />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
