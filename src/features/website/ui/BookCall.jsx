import { useLocation } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const BookCall = () => {
  const route = useLocation().pathname.slice(1);

  return (
    <section className="bg-sec-500 px-5 py-12 md:px-12 lg:py-20 xl:py-28">
      <div className="inner">
        <div className="mx-auto flex max-w-[1192px] flex-col items-center rounded-[32px] bg-pry-500 bg-[url('/images/backgrounds/letter.png')] bg-right-bottom bg-no-repeat p-8 md:p-12 lg:p-16">
          <h2 className="mb-5 max-w-[40ch] text-center font-raleway text-2xl/[24px] font-bold text-white lg:mb-10 lg:text-4xl/[48px]">
            {route === "our-services" || route === "case-study" ? (
              <>
                Discover How Alte Can Help
                <span className="block text-sec-200">
                  Ready to Elevate Your Business?
                </span>
              </>
            ) : (
              <>
                Don&apos;t Let Business Challenges Hold You Back.
                <span className="text-sec-200"> Partner With Us Today!</span>
              </>
            )}
          </h2>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ00GcrPNO72R7ML0RTskXRADvJdJmiBJh_CP03IxNCaTERG0W5huuLvIC1gD9nUZCYDWjJR9qCo?gv=true"
            className="btn btn-pry"
          >
            Book a Discovery Call
            <ArrowRightIcon className="size-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookCall;
