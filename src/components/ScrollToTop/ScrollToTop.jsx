/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Displays the component
 */
const ScrollToTop = ({ children }) => {
  /**
   * Gets the current path name
   */
  const { pathname } = useLocation();

  /**
   * Resets the scroll position to top upon route change
   */
  useEffect(() => {
    /**
     * Scrolls back to top
     */
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
