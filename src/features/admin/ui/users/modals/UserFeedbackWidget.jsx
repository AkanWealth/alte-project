import { useState } from "react";
import { FlagIcon, StarIcon, XMarkIcon } from "@heroicons/react/24/outline";

// Contexts
import { useModalContext } from "../../../../../contexts/ModalContext";

const FlagUser = ({ initialFlagged = false, onFlagToggle }) => {
  const [isFlagged, setIsFlagged] = useState(initialFlagged);

  const handleFlagClick = () => {
    const newFlaggedState = !isFlagged;
    setIsFlagged(newFlaggedState);
    if (onFlagToggle) {
      onFlagToggle(newFlaggedState);
    }
  };

  return (
    <button
      onClick={handleFlagClick}
      className="flex items-center focus:outline-none"
      aria-label={isFlagged ? "Unflag user" : "Flag user"}
    >
      <FlagIcon
        className={`size-6 transition-colors duration-200 ${
          isFlagged
            ? "fill-error-500 text-error-500"
            : "text-grey-300 hover:text-error-500"
        }`}
      />
    </button>
  );
};

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <StarIcon
            key={index}
            className={`size-6 cursor-pointer transition-colors duration-200 ${
              starValue <= (hover || rating)
                ? "fill-sec-400 text-sec-400"
                : "text-grey-300"
            }`}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(rating)}
          />
        );
      })}
    </div>
  );
};

const UserFeedbackWidget = () => {
  const { setModalComponent } = useModalContext();

  return (
    <div className="relative flex h-max w-full max-w-md flex-col items-center rounded-lg bg-white px-7 py-10 font-inter text-xl font-semibold">
      <button
        className="absolute right-4 top-5"
        onClick={() => setModalComponent(null)}
      >
        <XMarkIcon className="size-6" />
      </button>
      <img
        src="/images/admin/user-img.png"
        alt=""
        className="aspect-square w-full max-w-28 rounded-full"
      />
      <h2 className="mb-2 mt-6 font-inter text-xl font-semibold text-grey-900">
        Anjola Wunmi
      </h2>
      <p className="font-inter text-sm font-normal text-grey-300">
        anjolawunmi@gmail.com
      </p>
      <div className="mt-6 flex flex-row items-center gap-6">
        <div className="flex flex-col items-center">
          <FlagUser />
          <p className="font-inter text-sm font-normal text-grey-400">
            Flag user
          </p>
        </div>
        <div className="flex flex-col items-center">
          <StarRating />
          <p className="font-inter text-sm font-normal text-grey-400">Rating</p>
        </div>
      </div>
    </div>
  );
};
export default UserFeedbackWidget;
