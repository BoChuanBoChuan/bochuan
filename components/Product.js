import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// Dữ liệu từ ProductsData
import { devices } from "../data/ProductsData";

const ITEMS_PER_PAGE = 4;
const totalPages = Math.ceil(devices.length / ITEMS_PER_PAGE);

export default function Product() {
  const [currentPage, setCurrentPage] = useState(0);
  const { t } = useTranslation();
  const navigate = useNavigate(); // <-- Thêm navigate ở đây

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
              className="grid w-full grid-cols-1 gap-6 px-4 py-4 md:grid-cols-2 lg:grid-cols-4"
            >
              {devices
                .slice(pageIndex * ITEMS_PER_PAGE, (pageIndex + 1) * ITEMS_PER_PAGE)
                .map((device) => (
                  <div
                    key={device.id}
                    onClick={() => navigate(`/products/${device.id}`)} // <-- Điều hướng khi click
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
