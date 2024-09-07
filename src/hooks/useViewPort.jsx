import { useEffect, useState } from "react";

const useViewport = (width = "768px") => {
  const mediaQuery = `(min-width: ${width})`;
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);

    setInViewport(mediaQueryList.matches);

    const handleViewportChange = (e) => setInViewport(e.matches);

    mediaQueryList.addEventListener("change", handleViewportChange);

    return () =>
      mediaQueryList.removeEventListener("change", handleViewportChange);
  }, [mediaQuery]);

  return [inViewport];
};

export default useViewport;
