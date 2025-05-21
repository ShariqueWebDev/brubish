"use client";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AosComp = () => {
  const [scrollPosition, setScrollPosition] = useState(0);


  useEffect(() => {
    // Initialize AOS (Animate on Scroll) library
    Aos.init({
      once: true, // Animation happens only once
      duration: 1000, // Animation duration
      offset: 100, // Offset from the top to trigger animations
    });

    // Scroll to top irrespective of current scroll position
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    // Scroll event handler
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Update scroll position
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once
  return null;
};

export default AosComp;
