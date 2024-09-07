import { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import { IconOnlyButton } from "../components/Button";

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
    <IconOnlyButton
      color="dark"
      disabled={prevDisabled}
      icon={faArrowLeft}
      clickHandler={() => swiper.slidePrev()}
    />
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
    <IconOnlyButton
      color="dark"
      disabled={nextDisabled}
      icon={faArrowRight}
      clickHandler={() => swiper.slideNext()}
    />
  );
};

const Swipers = ({ slidesData }) => {
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
        },
      }}
    >
      <div>
        {slidesData.map((data, index) => (
          <SwiperSlide className="grid h-full min-h-full" key={index}>
            {data.content}
          </SwiperSlide>
        ))}
      </div>
      <div className="flex flex-row items-center gap-8">
        <SwiperButtonPrev />
        <SwiperButtonNext />
      </div>
    </Swiper>
  );
};

export default Swipers;
