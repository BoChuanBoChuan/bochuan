import { useState, useEffect } from "react";
import banner1 from "../assets/img/banner/banner1.jpg";
import banner2 from "../assets/img/banner/banner2.jpg";
import banner3 from "../assets/img/banner/banner3.jpg";
import banner4 from "../assets/img/banner/banner4.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const banners = [banner1, banner2, banner3, banner4];

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden rounded-lg max-w-screen-xl h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
      {/* Slide container */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt={`Banner ${index + 1}`}
            className="flex-shrink-0 object-cover w-full h-full"
            loading="lazy"
          />
        ))}
      </div>

      {/* Nút trái */}
      <button
        onClick={prevSlide}
        className="absolute flex items-center justify-center w-10 h-10 text-white -translate-y-1/2 bg-black rounded-full top-1/2 left-3 bg-opacity-40 hover:bg-opacity-70 sm:w-12 sm:h-12"
        aria-label="Previous Slide"
      >
        <FaChevronLeft className="text-xl sm:text-2xl" />
      </button>

      {/* Nút phải */}
      <button
        onClick={nextSlide}
        className="absolute flex items-center justify-center w-10 h-10 text-white -translate-y-1/2 bg-black rounded-full top-1/2 right-3 bg-opacity-40 hover:bg-opacity-70 sm:w-12 sm:h-12"
        aria-label="Next Slide"
      >
        <FaChevronRight className="text-xl sm:text-2xl" />
      </button>
    </div>
  );
}
