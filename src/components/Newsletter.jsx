const Newsletter = ({ relativeStyles }) => {
  return (
    <div
      className={`${relativeStyles} flex flex-wrap items-start justify-between gap-6`}
    >
      <div className="grow font-inter text-white">
        <h3 className="mb-2 text-xl font-semibold uppercase lg:text-3xl">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-sm font-medium lg:text-base">
          Sign Up and enjoy our services better
        </p>
      </div>
      <form className="grid shrink grow-0 basis-[410px] grid-cols-[auto_auto] grid-rows-1">
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          className="col-start-1 col-end-3 row-start-1 row-end-2 rounded-[4px] bg-white px-4 py-3 font-inter text-sm font-normal text-grey-400"
        />
        <button
          type="submit"
          className="col-start-2 col-end-3 row-start-1 row-end-2 ml-auto w-fit rounded-[4px] bg-sec-500 p-4 font-inter text-sm font-normal"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
