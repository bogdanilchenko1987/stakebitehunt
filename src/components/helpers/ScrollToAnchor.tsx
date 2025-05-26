import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToAnchor = () => {
  const location = useLocation();

  useEffect(() => {
    const anchor = location.hash;
    if (anchor) {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

export default ScrollToAnchor;
