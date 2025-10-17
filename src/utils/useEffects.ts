import { useEffect, useState } from "react";

// Navigation bar showing/hiding effect
export function useHideOnScroll(): boolean {
  const [isShowing, setShowing] = useState(true);
  const [latestScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // getting the scroll Y from window
      const currentYPosition = window.scrollY;

      if (currentYPosition > latestScrollY && currentYPosition > 50) {
        // scrolling down
        setShowing(false);
      } else {
        // scrolling up
        setShowing(true);
      }

      setLastScrollY(currentYPosition);
    };

    // adding the scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("hover", handleScroll), [latestScrollY];
    };
  });

  return isShowing;
}

// Navigation hamburger Menu state
export function shouldShowMobileMenu(): boolean {
  const [open, setOpen] = useState(false);
  setOpen(!open);

  return open;
}
