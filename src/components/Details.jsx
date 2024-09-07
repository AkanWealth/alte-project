const Details = ({ title, text }) => {
  return (
    <details className="group z-[1] rounded-xl bg-sec-100 px-7 py-8 text-start font-inter">
      <summary className="relative list-none text-lg font-semibold text-grey-900 after:absolute after:right-0 after:top-0 after:size-5 after:translate-y-1/3 after:bg-[url('/icons/plus.svg')] after:bg-cover after:bg-no-repeat group-open:after:bg-[url('/icons/minus.svg')] md:text-2xl">
        <span className="block w-[calc(100%-30px)]">{title}</span>
      </summary>
      <p className="w-[calc(100%-30px)] pt-4 text-sm font-normal text-grey-500 md:text-base lg:pt-8">
        {text}
      </p>
    </details>
  );
};

export default Details;
