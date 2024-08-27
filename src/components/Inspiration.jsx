import { useState } from "react";
import { artsCulture, popular } from "../constants"; // Assuming this path is correct

const Inspiration = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <section
        className="py-12 bg-third border-b-[1px] "
        style={{ backgroundColor: "#F7F7F7" }}
      >
        <div className="max-w-[1130px] m-auto">
          <h2 className="mb-3 text-2xl text-primary font-medium">
            Inspiration for future getaways
          </h2>
          <ul className="flex flex-wrap gap-3 items-center border-b ">
            <li>
              <button
                className={`${
                  activeTab === 1
                    ? "text-primary text-[14px] border-b-black border-b-[1px] pb-3 font-medium"
                    : "text-secondary pb-3 font-normal"
                }`}
                type="button"
                onClick={() => setActiveTab(1)}
              >
                Popular
              </button>
            </li>
            <li>
              <button
                className={`${
                  activeTab === 2
                    ? "text-primary text-[14px]  border-b-black border-b-[1px] pb-3  font-medium"
                    : "text-secondary pb-3 font-normal"
                }`}
                type="button"
                onClick={() => setActiveTab(2)}
              >
                Arts & culture
              </button>
            </li>
            <li>
              <button
                className={`${
                  activeTab === 3
                    ? "text-primary text-[14px] border-b-black border-b-[1px] pb-3  font-medium"
                    : "text-secondary pb-3 font-normal"
                }`}
                type="button"
                onClick={() => setActiveTab(3)}
              >
                Outdoors
              </button>
            </li>
            <li>
              <button
                className={`${
                  activeTab === 4
                    ? "text-primary text-[14px]  font-medium border-b-black border-b-[1px] pb-3"
                    : "text-secondary  pb-3 font-normal"
                }`}
                type="button"
                onClick={() => setActiveTab(4)}
              >
                Mountains
              </button>
            </li>
            <li>
              <button
                className={`${
                  activeTab === 5
                    ? "text-primary text-[14px]  font-medium border-b-black border-b-[1px] pb-3"
                    : "text-secondary pb-3 font-normal"
                }`}
                type="button"
                onClick={() => setActiveTab(5)}
              >
                Beach
              </button>
            </li>
            <li>
              <button
                className={`${
                  activeTab === 6
                    ? "text-primary text-[14px]  font-medium border-b-black border-b-[1px] pb-3"
                    : "text-secondary pb-3 font-normal"
                }`}
                type="button"
                onClick={() => setActiveTab(6)}
              >
                Unique
              </button>
            </li>
          </ul>
          <div>
            {activeTab === 1 && (
              <div className="grid grid-flow-row gap-y-4 gap-x-2 mt-4 text-neutral-600 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6">
                {popular.map((item, index) => (
                  <a href="#" key={index}>
                    <span className="text-[14px] font-medium text-primary block">
                      {item.name}
                    </span>
                    <span className="text-[14px] font-medium text-secondary">
                      {item.rental}
                    </span>
                  </a>
                ))}
              </div>
            )}
            {activeTab === 2 && (
              <div className="grid grid-flow-row gap-y-6 gap-x-2 mt-4 text-neutral-600 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6">
                {artsCulture.map((item, index) => (
                  <div key={index}>
                    <span className="text-[14px] font-medium text-primary block">
                      {item.name}
                    </span>
                    <span className="text-[14px] font-medium text-secondary">
                      {item.rental}
                    </span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 3 && (
              <div className="text-center mt-4">
                <p>No items found for Arts & culture</p>
              </div>
            )}
            {activeTab === 4 && (
              <div className="text-center mt-4">
                <p>No items found for Arts & culture</p>
              </div>
            )}
            {activeTab === 5 && (
              <div className="text-center mt-4">
                <p>No items found for Arts & culture</p>
              </div>
            )}
            {activeTab === 6 && (
              <div className="text-center mt-4">
                <p>No items found for Arts & culture</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Inspiration;
