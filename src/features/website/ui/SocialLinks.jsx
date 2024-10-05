const SocialLinks = ({ relativeStyles }) => {
  return (
    <ul
      className={`${relativeStyles} flex flex-row gap-3 text-pry-900 *:grid *:size-10 *:place-content-center *:rounded-full *:bg-sec-500 xl:gap-4`}
    >
      <li>
        <img src="/icons/twitter.svg" alt="" className="size-6" />
      </li>
      <li>
        <img src="/icons/facebook.svg" alt="" className="size-6" />
      </li>
      <li>
        <img src="/icons/instagram.svg" alt="" className="size-6" />
      </li>
    </ul>
  );
};

export default SocialLinks;
