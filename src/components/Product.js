import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// Import ảnh thật từ thư mục sản phẩm (giữ nguyên import ảnh của bạn)
import maycatdan1 from "../assets/img/product/maycatdan1.jpg";
import maydaithung1 from "../assets/img/product/maydaithung1.jpg";
import maydaithung2 from "../assets/img/product/maydaithung2.jpg";
import maydaithung3 from "../assets/img/product/maydaithung3.jpg";
import maydaithung4 from "../assets/img/product/maydaithung4.jpg";
import maydaithung5 from "../assets/img/product/maydaithung5.jpg";
import maydaithung6 from "../assets/img/product/maydaithung6.jpg";
import maydanthung1 from "../assets/img/product/maydanthung1.jpg";
import maydanthung2 from "../assets/img/product/maydanthung2.jpg";
import maydanthung3 from "../assets/img/product/maydanthung3.jpg";
import maydanthung4 from "../assets/img/product/maydanthung4.jpg";
import maydanthung5 from "../assets/img/product/maydanthung5.jpg";
import maydanthung6 from "../assets/img/product/maydanthung6.jpg";
import maymothung1 from "../assets/img/product/maymothung1.jpg";
import maymothung2 from "../assets/img/product/maymothung2.jpg";
import maymothung4 from "../assets/img/product/maymothung4.jpg";
import maymothung5 from "../assets/img/product/maymothung5.jpg";

const devices = [
  { id: 1, name: "maycatdan", image: maycatdan1 },
  { id: 2, name: "maydaithung", image: maydaithung1 },
  { id: 3, name: "maydaithung", image: maydaithung2 },
  { id: 4, name: "maydaithung", image: maydaithung3 },
  { id: 5, name: "maydaithung", image: maydaithung4 },
  { id: 6, name: "maydaithung", image: maydaithung5 },
  { id: 7, name: "maydaithung", image: maydaithung6 },
  { id: 8, name: "maydanthung", image: maydanthung1 },
  { id: 9, name: "maydanthung", image: maydanthung2 },
  { id: 10, name: "maydanthung", image: maydanthung3 },
  { id: 11, name: "maydanthung", image: maydanthung4 },
  { id: 12, name: "maydanthung", image: maydanthung5 },
  { id: 13, name: "maydanthung", image: maydanthung6 },
  { id: 14, name: "maymothung", image: maymothung1 },
  { id: 15, name: "maymothung", image: maymothung2 },
  { id: 16, name: "maymothung", image: maymothung4 },
  { id: 17, name: "maymothung", image: maymothung5 },
];

const ITEMS_PER_PAGE = 4;
const totalPages = Math.ceil(devices.length / ITEMS_PER_PAGE);

export default function DeviceCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const { t } = useTranslation();

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <div className="relative w-full max-w-6xl py-10 mx-auto">
      {/* Slider */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${totalPages * 100}%`,
            transform: `translateX(-${currentPage * (100 / totalPages)}%)`,
          }}
        >
          {[...Array(totalPages)].map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="grid w-full grid-cols-1 gap-6 px-4 py-4  md:grid-cols-1 lg:grid-cols-4"
            >
              {devices
                .slice(pageIndex * ITEMS_PER_PAGE, (pageIndex + 1) * ITEMS_PER_PAGE)
                .map((device) => (
                  <div
                    key={device.id}
                    className="p-4 text-center transition transform bg-white border rounded shadow cursor-pointer hover:shadow-md hover:scale-105"
                  >
                    <img
                      src={device.image}
                      alt={device.name}
                      className="w-full h-[200px] object-contain mb-3"
                    />
                    <h3 className="text-lg font-semibold text-black">
                      {t(`products.${device.name}`)}
                    </h3>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Nút trái */}
      <button
        onClick={prevPage}
        className="absolute left-0 flex items-center justify-center w-12 h-12 text-xl text-blue-700 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 hover:bg-blue-100"
        aria-label="Previous Page"
      >
        <FaChevronLeft />
      </button>

      {/* Nút phải */}
      <button
        onClick={nextPage}
        className="absolute right-0 flex items-center justify-center w-12 h-12 text-xl text-blue-700 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 hover:bg-blue-100"
        aria-label="Next Page"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentPage === index ? "bg-blue-600 scale-110" : "bg-gray-400"
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
