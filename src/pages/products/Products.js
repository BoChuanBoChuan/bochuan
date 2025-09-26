import React from "react";
import { useTranslation } from "react-i18next";
import { useFadeInOnScroll } from "../../hook/useFadeInOnScroll";
import { devices } from "../../data/ProductsData";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Products() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Chuẩn bị các biến SEO
  const pageTitle = `${t("products.title")} | CTY TNHH CÔNG NGHỆ THÔNG MINH BOCHUAN`;
  const pageDescription = t("products.description");
  const pageKeywords = "automation, robot, máy tự động, đóng gói, thiết bị công nghiệp";
  const pageUrl = "https://bochuanvn.com/products";
  const pageImage = "https://bochuanvn.com/1.png";

  // Danh sách các nhóm sản phẩm chính, giữ nguyên logic của bạn
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
    <>
      {/* Thêm phần SEO metadata bằng react-helmet */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data BreadcrumbList */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Trang chủ",
                "item": "https://bochuanvn.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "${t("products.title")}",
                "item": "${pageUrl}"
              }
            ]
          }
          `}
        </script>
      </Helmet>

      {/* Nội dung trang sản phẩm */}
      <div className="max-w-6xl px-4 py-10 pt-40 pb-20 mx-auto">
        <h1 className="mb-10 text-4xl font-bold text-center text-blue-700">
          {t("products.title")}
        </h1>

        {mainCategories.map((mainCategory) => {
          // Hook hiệu ứng fade-in khi scroll tới phần
          const [sectionRef, sectionVisible] = useFadeInOnScroll();

          // Lọc ra các thiết bị thuộc nhóm hiện tại
          const devicesInCategory = devices.filter((device) =>
            mainCategory.subCategories.some((subCategory) => subCategory.type === device.type)
          );

          // Nếu không có thiết bị trong nhóm thì không render
          if (devicesInCategory.length === 0) {
            return null;
          }

          return (
            <section
              key={mainCategory.key}
              ref={sectionRef}
              className={`transition-all duration-700 ease-out transform mb-16 ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="pl-3 mb-6 text-xl font-semibold text-blue-600 border-l-4 border-blue-300">
                {t(`products.${mainCategory.key}`)}
              </h2>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {devicesInCategory.map((device) => {
                  const [cardRef, cardVisible] = useFadeInOnScroll(0.15);

                  return (
                    <div
                      key={device.id}
                      ref={cardRef}
                      onClick={() => navigate(`/products/${device.slug}`)}
                      className={`cursor-pointer p-4 text-center bg-white border rounded shadow hover:shadow-md hover:scale-105 transition-all duration-700 ease-out transform ${
                        cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          navigate(`/products/${device.slug}`);
                        }
                      }}
                      aria-label={t(`products.${device.name}`)}
                    >
                      <img
                        src={device.image}
                        alt={t(`products.${device.name}`)}
                        className="w-full h-[180px] object-contain mb-3"
                        loading="lazy"
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
    </>
  );
}
