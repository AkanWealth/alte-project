const Copyright = ({ relativeStyles }) => {
  return (
    <div
      className={`${relativeStyles} bg-gradient-to-r from-pry-900 via-pry-900/45 to-[hsl(162,167%,30%)] px-2 py-4`}
    >
      <p className="mx-auto text-center font-inter text-xs font-semibold uppercase text-white">
        Copyrights 2024. All rights reserved
      </p>
    </div>
  );
};

export default Copyright;
