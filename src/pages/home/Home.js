import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import BannerCarousel from "../../components/BannerCarousel";
import Products from "../../components/Product";
import { useFadeInOnScroll } from "../../hook/useFadeInOnScroll";
import robot from "../../assets/img/maymocthaytheconnguoi.png";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [mainRef, mainVisible] = useFadeInOnScroll(0.2);

  const fadeClass = "transition-all duration-700 ease-in-out transform";
  const hidden = "opacity-0 translate-y-8";
  const shown = "opacity-100 translate-y-0";

  const pageTitle = `${t("home.title")} | CTY TNHH CÔNG NGHỆ THÔNG MINH BOCHUAN`;
  const pageDescription = t("home.description");
  const pageUrl = "https://bochuanvn.com/";
  const pageImage = "https://bochuanvn.com/1.png";

  // ✅ Structured Data cho Organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Công ty TNHH Công Nghệ Thông Minh Bochuan",
    url: "https://bochuanvn.com/",
    logo: "https://bochuanvn.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84-908-413-588",
      contactType: "Customer Service",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tổ 12, khu C, ấp 5, xã An Phước",
      addressRegion: "Đồng Nai",
      addressCountry: "VN",
    },
    sameAs: [
      "https://www.facebook.com/people/Công-ty-TNHH-Công-Nghệ-Thông-Minh-Bochuan/61581168650718",
    ],
  };

  // ✅ Breadcrumb JSON-LD cho trang chủ
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: "https://bochuanvn.com/"
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      <Helmet>
        <html lang={i18n.language} />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />

        {/* OG tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      </Helmet>

      {/* ✅ H1 ẩn cho SEO */}
      <h1 className="sr-only">
        Công ty TNHH Công Nghệ Thông Minh Bochuan - Trang chủ
      </h1>

      {/* Banner */}
      <BannerCarousel />

      {/* Sản phẩm */}
      <Products />

      {/* Nội dung chính */}
      <main
        ref={mainRef}
        className={`flex-grow px-4 py-12 text-center ${fadeClass} ${
          mainVisible ? shown : hidden
        }`}
      >
        <h2 className="mb-4 text-3xl font-bold text-blue-700">
          {t("home.title")}
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          {pageDescription}
        </p>

        {/* Ảnh minh họa */}
        <div className="mt-16 text-center">
          <div className="inline-block w-full max-w-2xl overflow-hidden rounded-lg shadow-md aspect-video">
            <img
              src={robot}
              alt={t("home.description_img")}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-sm italic text-gray-600">
            {t("home.description_img")}
          </p>
        </div>
      </main>
    </div>
  );
}
