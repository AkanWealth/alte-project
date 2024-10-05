import { useEffect, useState } from "react";
import "swiper/css";
import { Swiper, useSwiper } from "swiper/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

const SwiperButtonPrev = () => {
  const [prevDisabled, setPrevDisabled] = useState(false);
  const swiper = useSwiper();

  useEffect(() => {
    if (swiper) {
      setPrevDisabled(swiper.isBeginning);

      const handleSlideChange = () => {
        setPrevDisabled(swiper.isBeginning);
      };

      swiper.on("slideChange", handleSlideChange);

      return () => swiper.off("slideChange", handleSlideChange); // Cleanup on unmount
    }
  }, [swiper]);

  return (
    <button
      disabled={prevDisabled}
      className="btn btn-sec"
      onClick={() => swiper.slidePrev()}
    >
      <ArrowLeftIcon className="size-6" />
    </button>
  );
};

const SwiperButtonNext = () => {
  const [nextDisabled, setNextDisabled] = useState(false);
  const swiper = useSwiper();

  useEffect(() => {
    if (swiper) {
      setNextDisabled(swiper.isEnd);

      const handleSlideChange = () => {
        setNextDisabled(swiper.isEnd);
      };

      swiper.on("slideChange", handleSlideChange);

      return () => swiper.off("slideChange", handleSlideChange); // Cleanup on unmount
    }
  }, [swiper]);

  return (
    <button
      disabled={nextDisabled}
      className="btn btn-sec"
      onClick={() => swiper.slideNext()}
    >
      <ArrowRightIcon className="size-6" />
    </button>
  );
};

const Swipers = ({ children }) => {
  return (
    <Swiper
      className="flex cursor-grab flex-col items-center gap-10 px-1 py-2"
      spaceBetween={24}
      autoHeight={true}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      <div>{children}</div>
      <div className="flex flex-row items-center gap-8">
        <SwiperButtonPrev />
        <SwiperButtonNext />
      </div>
    </Swiper>
  );
};

export default Swipers;
