import { useEffect } from "react";

const useScrollToAnchor = ({ hash }) => {
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (!element) return;
      element.scrollIntoView();
    }
  }, [hash]);

  return null;
};

export default useScrollToAnchor;
