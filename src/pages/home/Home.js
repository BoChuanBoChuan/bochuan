import { useTranslation } from "react-i18next";
import BannerCarousel from "../../components/BannerCarousel";
import Products from "../../components/Product";
import { useFadeInOnScroll } from "../../hook/useFadeInOnScroll";

export default function Home() {
  const { t } = useTranslation();

  const [mainRef, mainVisible] = useFadeInOnScroll(0.2);
  const fadeClass = "transition-all duration-700 ease-in-out transform";
  const hidden = "opacity-0 translate-y-8";
  const shown = "opacity-100 translate-y-0";

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      {/* Banner */}
      <BannerCarousel />

      {/* Sản phẩm */}
      <Products />

      {/* Phần giới thiệu chính */}
      <main
        ref={mainRef}
        className={`flex-grow px-4 py-12 text-center ${fadeClass} ${
          mainVisible ? shown : hidden
        }`}
      >
        <h1 className="mb-4 text-3xl font-bold text-blue-700">
          {t("home.title")}
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          {t("home.description")}
        </p>
      </main>
    </div>
  );
}
