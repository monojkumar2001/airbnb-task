
const Footer = () => {
  return (
    <>
      <section
        className="py-12 border-b-[1px]"
        style={{ backgroundColor: "#F7F7F7" }}
      >
        <div className="container m-auto">
          <div className="grid grid-flow-row gap-y-6 gap-x-2 mt-4 text-neutral-600 sm:grid-cols-1 md:grid-cols-3">
            <div className="pb-2">
              <ul>
                <li>
                  <h4 className="text-[16px] mb-3 font-medium text-primary">
                    Support
                  </h4>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer