import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import companyImage from "../../assets/img/cty.jpg";
import { useFadeInOnScroll } from "../../hook/useFadeInOnScroll.js";

export default function About() {
  const { t } = useTranslation();
  const [ref, visible] = useFadeInOnScroll(0.2);

  const fadeClass = "transition-all duration-700 ease-in-out transform";
  const hidden = "opacity-0 translate-y-8";
  const shown = "opacity-100 translate-y-0";

  const pageTitle = `${t("about.title")} | CTY TNHH CÔNG NGHỆ THÔNG MINH BOCHUAN`;
  const pageDescription = t("about.intro" );
  const pageImage = "https://bochuanvn.com/1.png";
  const pageUrl = "https://bochuanvn.com/about";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />

        {/* Open Graph */}
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

        {/* ✅ Structured Data (Organization) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CTY TNHH CÔNG NGHỆ THÔNG MINH BOCHUAN",
            "alternateName": "Bochuan Intelligent Technology Company Limited",
            "url": "https://bochuanvn.com",
            "logo": "https://bochuanvn.com/1.png",
            "description": "Bochuan Intelligent Technology Company Limited là đơn vị chuyên cung cấp giải pháp công nghệ thông minh và thiết bị đóng gói tiên tiến.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Tổ 12, khu C, ấp 5, xã An Phước",
              "addressLocality": "Long Thành",
              "addressRegion": "Đồng Nai",
              "addressCountry": "VN"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+84-908-413-588",
                "contactType": "customer support",
                "areaServed": "VN",
                "availableLanguage": ["Vietnamese", "Chinese"]
              },
              {
                "@type": "ContactPoint",
                "telephone": "+84-908-181-488",
                "contactType": "sales",
                "areaServed": "VN",
                "availableLanguage": ["Vietnamese", "Chinese"]
              },
              {
                "@type": "ContactPoint",
                "contactType": "WeChat",
                "name": "15657953330"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/people/Công-ty-TNHH-Công-Nghệ-Thông-Minh-Bochuan/61581168650718"
            ]
          }
        `}
        </script>

        {/* ✅ Structured Data (Breadcrumb cho trang About) */}
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
                "name": "Giới thiệu",
                "item": "https://bochuanvn.com/about"
              }
            ]
          }
        `}
        </script>
      </Helmet>

      <section
        ref={ref}
        className={`max-w-6xl px-6 py-16 pt-40 pb-40 mx-auto ${fadeClass} ${
          visible ? shown : hidden
        }`}
        aria-labelledby="about-title"
      >
        <h1
          id="about-title"
          className="mb-10 text-4xl font-bold text-center text-blue-700"
        >
          {t("about.title")}
        </h1>

        <div className="flex flex-col items-start gap-10 md:flex-row md:gap-16">
          <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
            <img
              src={companyImage}
              alt="Ảnh công ty Bochuan"
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
              loading="lazy"
            />
          </div>

          <div className="w-full space-y-5 leading-relaxed text-justify text-gray-700 md:w-1/2 max-w-prose md:text-left hyphens-auto">
            <p className="text-xl font-semibold text-indigo-700">
              {t("about.companyName")}
            </p>

            <p>{t("about.intro")}</p>
            <p>{t("about.focus")}</p>

            <ul className="grid grid-cols-1 pl-5 space-y-1 text-gray-800 list-disc list-inside md:grid-cols-2 gap-x-6 gap-y-1">
              {t("about.services", { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <p>
              <strong className="text-indigo-600">
                {t("about.commitment")}
              </strong>
            </p>
          </div>
        </div>

        <div className="mt-10 text-right">
          <a
            href="/catalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 font-semibold text-white transition bg-blue-700 rounded hover:bg-blue-800"
          >
            Catalog/目录
          </a>
        </div>
      </section>
    </>
  );
}
