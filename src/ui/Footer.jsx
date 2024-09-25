import Copyright from "../components/Copyright";
import FooterNav from "../components/FooterNav";
import Logo from "../components/Logo";
import Newsletter from "../components/Newsletter";
import SocialLinks from "../components/SocialLinks";

const Footer = ({ relativeStyles }) => {
  return (
    <footer
      className={`${relativeStyles} grid min-h-[664px] bg-pry-900 pt-8 lg:pt-10`}
    >
      <div className="mb-9 flex flex-col gap-10 px-5 lg:gap-28 lg:px-10">
        <section className="inner flex flex-wrap justify-between gap-10">
          <Newsletter relativeStyles="shrink grow-0 basis-[1000px]" />
          <SocialLinks relativeStyles="shrink-0 grow-0" />
        </section>
        <section className="inner grid grid-rows-[auto_auto] gap-14 md:grid-cols-[auto_auto] md:grid-rows-1">
          <Logo relativeStyles="w-32 lg:w-56 xl:w-80" />
          <FooterNav relativeStyles="flex-shrink flex-grow basis-1/2" />
        </section>
      </div>
      <Copyright relativeStyles="mt-auto" />
    </footer>
  );
};

export default Footer;
