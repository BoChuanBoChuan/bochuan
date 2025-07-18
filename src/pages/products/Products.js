import { useTranslation } from "react-i18next";
import { useFadeInOnScroll } from "../../hook/useFadeInOnScroll";

// Ảnh sản phẩm
import maycatdan1 from "../../assets/img/product/maycatdan1.jpg";
import maydaithung1 from "../../assets/img/product/maydaithung1.jpg";
import maydaithung2 from "../../assets/img/product/maydaithung2.jpg";
import maydaithung3 from "../../assets/img/product/maydaithung3.jpg";
import maydaithung4 from "../../assets/img/product/maydaithung4.jpg";
import maydaithung5 from "../../assets/img/product/maydaithung5.jpg";
import maydaithung6 from "../../assets/img/product/maydaithung6.jpg";
import maydanthung1 from "../../assets/img/product/maydanthung1.jpg";
import maydanthung2 from "../../assets/img/product/maydanthung2.jpg";
import maydanthung3 from "../../assets/img/product/maydanthung3.jpg";
import maydanthung4 from "../../assets/img/product/maydanthung4.jpg";
import maydanthung5 from "../../assets/img/product/maydanthung5.jpg";
import maydanthung6 from "../../assets/img/product/maydanthung6.jpg";
import maymothung1 from "../../assets/img/product/maymothung1.jpg";
import maymothung2 from "../../assets/img/product/maymothung2.jpg";
import maymothung4 from "../../assets/img/product/maymothung4.jpg";
import maymothung5 from "../../assets/img/product/maymothung5.jpg";

// Danh sách sản phẩm
const devices = [
  { id: 1, name: "maycatdan", image: maycatdan1, type: "maycatdan" },

  { id: 2, name: "maydaithung", image: maydaithung1, type: "maydaithung" },
  { id: 3, name: "maydaithung", image: maydaithung2, type: "maydaithung" },
  { id: 4, name: "maydaithung", image: maydaithung3, type: "maydaithung" },
  { id: 5, name: "maydaithung", image: maydaithung4, type: "maydaithung" },
  { id: 6, name: "maydaithung", image: maydaithung5, type: "maydaithung" },
  { id: 7, name: "maydaithung", image: maydaithung6, type: "maydaithung" },

  { id: 8, name: "maydanthung", image: maydanthung1, type: "maydanthung" },
  { id: 9, name: "maydanthung", image: maydanthung2, type: "maydanthung" },
  { id: 10, name: "maydanthung", image: maydanthung3, type: "maydanthung" },
  { id: 11, name: "maydanthung", image: maydanthung4, type: "maydanthung" },
  { id: 12, name: "maydanthung", image: maydanthung5, type: "maydanthung" },
  { id: 13, name: "maydanthung", image: maydanthung6, type: "maydanthung" },

  { id: 14, name: "maymothung", image: maymothung1, type: "maymothung" },
  { id: 15, name: "maymothung", image: maymothung2, type: "maymothung" },
  { id: 16, name: "maymothung", image: maymothung4, type: "maymothung" },
  { id: 17, name: "maymothung", image: maymothung5, type: "maymothung" },
];

// Danh mục
const categories = ["maycatdan", "maydaithung", "maydanthung", "maymothung"];

export default function Products() {
  const { t } = useTranslation();

  return (
    <div  className="max-w-6xl px-4 py-10 pt-40 pb-20 mx-auto">
      <h1 className="mb-10 text-4xl font-bold text-center text-blue-700">
        {t("products.title")}
      </h1>

      {categories.map((category) => {
        const filtered = devices.filter((d) => d.type === category);
        const [sectionRef, sectionVisible] = useFadeInOnScroll();

        return (
          <div
            key={category}
            ref={sectionRef}
            className={`transition-all duration-700 ease-out transform  ${
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            } mb-16`}
          >
            <h2 className="mb-6 text-xl font-bold text-black">
              {t(`products.${category}`)}
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filtered.map((device) => {
                const [cardRef, cardVisible] = useFadeInOnScroll(0.2);

                return (
                  <div
                    key={device.id}
                    ref={cardRef}
                    className={`transition-all duration-700 ease-out transform  cursor-pointer ${
                      cardVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    } p-4 text-center bg-white border rounded shadow hover:shadow-md hover:scale-105`}
                  >
                    <img
                      src={device.image}
                      alt={device.name}
                      className="w-full h-[180px] object-contain mb-3"
                    />
                    <h3 className="text-base font-semibold text-gray-800">
                      {t(`products.${device.name}`)}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
