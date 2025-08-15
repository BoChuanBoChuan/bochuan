import { useTranslation } from "react-i18next";
import { useFadeInOnScroll } from "../../hook/useFadeInOnScroll";
import { devices } from "../../data/ProductsData";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const mainCategories = [
    {
      key: "nonStandardAutomation",
      subCategories: [
        { type: "maytudonghoathietketheoyeucau", key: "maytudonghoathietketheoyeucau" },
        { type: "thietbilapraptudonghoatuychinh", key: "thietbilapraptudonghoatuychinh" },
        { type: "canhtayrobotcaplieu", key: "canhtayrobotcaplieu" },
        { type: "robot6truc", key: "robot6truc" },
        { type: "robttruccautudongnapgap", key: "robttruccautudongnapgap" },
        { type: "mayquanmangtudong", key: "mayquanmangtudong" },
        { type: "maydanthung", key: "maydanthung" },
        { type: "maymothung", key: "maymothung" },
        { type: "daychuyentruyendong", key: "daychuyentruyendong" },
        { type: "daychuyenphanloai", key: "daychuyenphanloai" },
        { type: "daychuyendanthung", key: "daychuyendanthung" },
      ],
    },
    {
      key: "standardAutomation",
      subCategories: [
        { type: "tramrobot", key: "tramrobot" },
        { type: "maydannhantudong", key: "maydannhantudong" },
        { type: "maydaithung", key: "maydaithung" },
        { type: "maysietvitbantudong", key: "maysietvitbantudong" },
        { type: "maysietvittudongtoado", key: "maysietvittudongtoado" },
        { type: "mayconhiettudong", key: "mayconhiettudong" },
        { type: "maydonggoicattudong", key: "maydonggoicattudong" },
      ],
    },
    {
      key: "vibratingBowl",
      subCategories: [
        { type: "mamrung", key: "mamrung" },
      ],
    },
  ];

  return (
    <div className="max-w-6xl px-4 py-10 pt-40 pb-20 mx-auto">
      <h1 className="mb-10 text-4xl font-bold text-center text-blue-700">
        {t("products.title")}
      </h1>

      {mainCategories.map((mainCat) => {
        const [sectionRef, sectionVisible] = useFadeInOnScroll();

        // Gộp toàn bộ sản phẩm thuộc các subCategory
        const allDevicesInCategory = devices.filter((d) =>
          mainCat.subCategories.some((subCat) => subCat.type === d.type)
        );

        if (allDevicesInCategory.length === 0) return null;

        return (
          <section
            key={mainCat.key}
            ref={sectionRef}
            className={`transition-all duration-700 ease-out transform mb-16 ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Tiêu đề danh mục lớn */}
           <h2 className="pl-3 mb-6 text-xl font-semibold text-blue-600 border-l-4 border-blue-300">
  {t(`products.${mainCat.key}`)}
</h2>


            {/* Danh sách sản phẩm đã gộp */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {allDevicesInCategory.map((device) => {
                const [cardRef, cardVisible] = useFadeInOnScroll(0.15);

                return (
                  <div
                    key={device.id}
                    ref={cardRef}
                    onClick={() => navigate(`/products/${device.id}`)}
                    className={`transition-all duration-700 ease-out transform cursor-pointer p-4 text-center bg-white border rounded shadow hover:shadow-md hover:scale-105 ${
                      cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <img
                      src={device.image}
                      alt={device.name}
                      className="w-full h-[180px] object-contain mb-3"
                    />
                    <h4 className="text-base font-semibold text-gray-800">
                      {t(`products.${device.name}`)}
                    </h4>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
