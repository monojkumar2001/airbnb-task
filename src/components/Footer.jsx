import { airbnb, hosting, support } from "../constants";

const Footer = () => {
  return (
    <>
      <section
        className="py-12 border-b-[1px]"
        style={{ backgroundColor: "#F7F7F7" }}
      >
        <div className=" max-w-[1130px] m-auto">
          <div className="grid grid-flow-row gap-y-6 gap-x-2 text-neutral-600 sm:grid-cols-1 md:grid-cols-3">
            <div className="pb-2">
              <ul>
                <li>
                  <h4 className="text-[16px] mb-3 font-medium text-primary">
                    Support
                  </h4>
                </li>
                {support.map((item) => (
                  <li key={item.id} className="mb-2">
                    <a
                      href={item.link}
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pb-2">
              <ul>
                <li>
                  <h4 className="text-[16px] mb-3 font-medium text-primary">
                  Hosting
                  </h4>
                </li>
                {hosting.map((item) => (
                  <li key={item.id} className="mb-2">
                    <a
                      href={item.link}
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pb-2">
              <ul>
                <li>
                  <h4 className="text-[16px] mb-3 font-medium text-primary">
                  Airbnb
                  </h4>
                </li>
                {airbnb.map((item) => (
                  <li key={item.id} className="mb-2">
                    <a
                      href={item.link}
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
