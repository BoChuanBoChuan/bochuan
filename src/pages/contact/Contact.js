import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { FaClock, FaMapMarkerAlt, FaShareAlt } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import TikTokIcon from "../../components/TikTokIcon.jsx";
import { useFadeInOnScroll } from "../../hook/useFadeInOnScroll.js";
import { FaFacebook, FaWeixin } from "react-icons/fa";
import { SiZalo } from "react-icons/si"; // Zalo

export default function Contact() {
  const { t, i18n } = useTranslation();

  // Gọi hook cho từng phần
  const [hoursRef, hoursVisible] = useFadeInOnScroll();
  const [infoRef, infoVisible] = useFadeInOnScroll();
  const [socialRef, socialVisible] = useFadeInOnScroll();
  const [visitRef, visitVisible] = useFadeInOnScroll();

  // Class hiệu ứng đồng bộ
  const fadeClass = "transition-all duration-700 ease-in-out transform";
  const hidden = "opacity-0 translate-y-8";
  const visible = "opacity-100 translate-y-0";

  // SEO metadata
  const pageTitle = `${t("contact.title")} | CTY TNHH CÔNG NGHỆ THÔNG MINH BOCHUAN`;
  const pageDescription = t("contact.metaDescription");
  const pageUrl = "https://bochuanvn.com/contact";
  const pageImage = "https://bochuanvn.com/1.png";

  // Breadcrumb JSON-LD
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: "https://bochuanvn.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Liên hệ",
        item: "https://bochuanvn.com/contact",
      },
    ],
  };

  return (
    <div className="max-w-6xl px-4 pt-40 pb-40 mx-auto space-y-20 text-center">
      <Helmet>
        <html lang={i18n.language} />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="Bochuan, Liên hệ, Công nghệ thông minh, Máy móc đóng gói" />

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

        {/* JSON-LD Breadcrumb */}
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>

      {/* ✅ H1 ẩn dùng cho SEO */}
      <h1 className="sr-only">{pageTitle}</h1>

      {/* Tiêu đề hiển thị */}
      <h2 className="mb-10 text-4xl font-bold text-center text-blue-700">
        {t("contact.title")}
      </h2>

      {/* Giờ phục vụ */}
      <section
        ref={hoursRef}
        className={`${fadeClass} ${hoursVisible ? visible : hidden} w-full max-w-xl p-8 mx-auto bg-gray-50 rounded-lg shadow`}
      >
        <h3 className="flex items-center justify-center gap-3 mb-6 text-2xl font-semibold text-black">
          <FaClock className="text-blue-700" />
          {t("contact.hoursTitle")}
        </h3>
        <p className="mb-1 text-lg">{t("contact.weekdays")}</p>
        <p className="text-lg">{t("contact.sunday")}</p>
      </section>

      {/* Thông tin liên hệ */}
      <section
        ref={infoRef}
        className={`${fadeClass} ${infoVisible ? visible : hidden} w-full max-w-xl p-8 mx-auto bg-white rounded-lg shadow`}
      >
        <h3 className="flex items-center justify-center gap-3 mb-6 text-2xl font-semibold text-black">
          <MdLocalPhone className="text-blue-700" />
          {t("contact.contactInfoTitle")}
        </h3>
        <p className="text-lg">{t("contact.contactInfo")}</p>
      </section>

      {/* Mạng xã hội */}
      <section
        ref={socialRef}
        className={`${fadeClass} ${socialVisible ? visible : hidden} w-full max-w-xl p-8 mx-auto bg-gray-50 rounded-lg shadow`}
      >
        <h3 className="flex items-center justify-center gap-3 mb-8 text-2xl font-semibold text-black">
          <FaShareAlt className="text-blue-700" />
          {t("contact.socialTitle")}
        </h3>

        <div className="flex flex-col items-start justify-center gap-6 sm:items-center sm:flex-col">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/bochuanvn/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition hover:opacity-80"
          >
            <FaFacebook className="w-6 h-6" color="#1877F2" />
            <span className="text-lg font-medium text-blue-700">Bochuan Bochuan (博川)</span>
          </a>

          {/* Zalo */}
          <div className="flex items-center gap-3 text-blue-700">
            <div className="p-1 border-2 border-[#008EEA] rounded-md bg-white">
              <SiZalo size={28} color="#008EEA" />
            </div>
            <span className="text-lg font-medium">Zalo: 0908181488</span>
          </div>

          {/* WeChat */}
          <div className="flex items-center gap-3">
            <FaWeixin className="w-6 h-6" color="#07C160" />
            <span className="text-lg font-medium text-blue-700">
              WeChat: bczdp3330（微信号）
            </span>
          </div>

          {/* TikTok 1 */}
          <a
            href="https://www.tiktok.com/@bochuan.cntdh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition hover:opacity-80"
          >
            <TikTokIcon size={32} />
            <span className="text-lg font-medium text-blue-700">{t("contact.tiktok1")}</span>
          </a>

          {/* TikTok 2 */}
          <a
            href="https://www.tiktok.com/@bochuan.bochuan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition hover:opacity-80"
          >
            <TikTokIcon size={32} />
            <span className="text-lg font-medium text-blue-700">{t("contact.tiktok2")}</span>
          </a>
        </div>
      </section>

      {/* Ghé thăm chúng tôi */}
      <section
        ref={visitRef}
        className={`${fadeClass} ${visitVisible ? visible : hidden} w-full max-w-5xl mx-auto`}
      >
        <h3 className="flex items-center justify-center gap-3 mb-10 text-2xl font-semibold text-black">
          <FaMapMarkerAlt className="text-blue-700" />
          {t("contact.visitUsTitle")}
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Địa chỉ */}
          <div className="px-4 text-lg leading-relaxed text-left">
            <p>{t("contact.address")}</p>
          </div>

          {/* Google Map */}
          <div className="overflow-hidden border border-gray-300 rounded-lg shadow-lg h-[350px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.93119976525512!2d106.94207869470122!3d10.819025839490285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31751f000dc249a7%3A0x9ac04fa4f1c5e30!2zQ8O0bmcgdHkgQ8O0bmcgTmdo4buHIFRow7RuZyBNaW5oIEJvY2h1YW4!5e0!3m2!1svi!2s!4v1752560991638!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ công ty"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
