const Testimonial = ({ relativeStyles, data }) => {
  return (
    <article
      className={`${relativeStyles} w-full max-w-[381px] rounded-lg bg-white px-8 py-6 font-inter`}
    >
      <div className="mb-4 flex flex-row items-center gap-4 lg:gap-6">
        <img
          src={data.img}
          alt={`${data.name}'s headshot`}
          className="size-10 lg:size-16"
        />
        <h3 className="text-base font-semibold text-pry-900 lg:text-xl">
          {data.name}
          <span className="block text-sm font-normal text-grey-400">
            {data.role}
          </span>
        </h3>
      </div>
      <p className="text-lg font-normal text-grey-500">{data.quote}</p>
    </article>
  );
};

export default Testimonial;
