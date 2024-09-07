const ServiceItem = ({ id, img, title, subtitle, description, isReversed }) => {
  const bgColor = isReversed ? "bg-pry-500" : "bg-white";
  return (
    <article
      id={id}
      className={`px-5 py-8 md:py-12 lg:px-10 lg:py-14 xl:py-20 ${bgColor}`}
    >
      <div
        className={`inner flex flex-col items-start gap-6 ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-center lg:gap-14 xl:gap-20`}
      >
        <img src={img} alt="" className="w-full max-w-96" />
        <div className="text-start font-raleway">
          <h3
            className={`text-3xl font-bold md:text-4xl ${bgColor === "bg-white" ? "text-black" : "text-white"}`}
          >
            {title}
          </h3>
          <p
            className={`mt-4 text-base font-normal md:text-lg lg:mt-9 ${bgColor === "bg-white" ? "" : "text-white"}`}
          >
            <span
              className={`mb-2 block text-xl font-semibold md:text-2xl lg:mb-4 ${bgColor === "bg-white" ? "text-pry-500" : "text-sec-500"}`}
            >
              {subtitle}
            </span>
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ServiceItem;
