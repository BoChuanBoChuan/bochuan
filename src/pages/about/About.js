import { useTranslation } from "react-i18next";
import companyImage from "../../assets/img/cty.jpg";
import { useFadeInOnScroll } from "../../hook/useFadeInOnScroll.js";
import robot from "../../assets/img/maymocthaytheconnguoi.png"

export default function About() {
  const { t } = useTranslation();
  const [ref, visible] = useFadeInOnScroll(0.2);

  // Class đồng bộ hiệu ứng với các trang khác
  const fadeClass = "transition-all duration-700 ease-in-out transform";
  const hidden = "opacity-0 translate-y-8";
  const shown = "opacity-100 translate-y-0";

  return (
    <section
      ref={ref}
      className={`max-w-6xl px-6 py-16 pt-40 pb-40 mx-auto ${fadeClass} ${
        visible ? shown : hidden
      }`}
      aria-labelledby="about-title"
    >
      {/* Tiêu đề */}
      <h1
        id="about-title"
        className="mb-10 text-4xl font-bold text-center text-blue-700"
      >
        {t("about.title")}
      </h1>

      {/* Nội dung chính */}
     <div className="flex flex-col items-start gap-10 md:flex-row md:gap-16">

        {/* Ảnh công ty */}
        <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
          <img
            src={companyImage}
            alt="Ảnh công ty Bochuan"
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Văn bản giới thiệu */}
        <div className="w-full space-y-5 leading-relaxed text-justify text-gray-700 md:w-1/2 max-w-prose md:text-left hyphens-auto">
          <p className="text-xl font-semibold text-indigo-700">
            {t("about.companyName")}
          </p>

          <p>{t("about.intro")}</p>
          <p>{t("about.focus")}</p>

          {/* Dịch vụ */}
          <ul className="grid grid-cols-1 pl-5 space-y-1 text-gray-800 list-disc list-inside md:grid-cols-2 gap-x-6 gap-y-1">
            {t("about.services", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p>
            <strong className="text-indigo-600">{t("about.commitment")}</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
