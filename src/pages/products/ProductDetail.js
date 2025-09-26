import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { devices } from "../../data/ProductsData";
import { useTranslation } from "react-i18next";

import MayDongThung6VI from "../../data/table/maydongthung6_vi";
import MayMoThung1 from "../../data/table/MayMoThung1";
import MayQuanMang1 from "../../data/table/MayQuanMang1";
import MayQuanMang2 from "../../data/table/MayQuanMang2";
import MayQuanMang3 from "../../data/table/mayQuanMang3";
import MayDanThung2 from "../../data/table/MayDanThung2";
import TramRobot1 from "../../data/table/tramrobot1";
import MayDanNhan1 from "../../data/table/MayDanNhan1";
import MayDanNhan2 from "../../data/table/MayDanNhan2";
import MayDaiThung7 from "../../data/table/MayDaiThung7";
import MayDaiThung4 from "../../data/table/MayDaiThung4";
import MaySietVit1 from "../../data/table/MaySietVit1";
import MayDongGoiCat1 from "../../data/table/MayDongGoiCat1";
import MayDongGoiCat2 from "../../data/table/MayDongGoiCat2";
import MayCoMangNhietPhunKhi1 from "../../data/table/MayCoMangNhietPhunKhi1";
import MayCoMangNhietTuanHoan1 from "../../data/table/MayCoNhietTuanHoan2";

export default function ProductDetail() {
  const { slug } = useParams();
  const { t, ready } = useTranslation();

  // Chờ i18n load xong mới render (nếu cần)
  if (!ready) return null;

  const product = devices.find((p) => p.slug === slug);

  if (!product) return <div className="p-4">{t("products.not_found")}</div>;

  const pageTitle = `${t(product.titleKey)} | CTY TNHH CÔNG NGHỆ THÔNG MINH BOCHUAN`;
  const pageDescription = t(product.descriptionKey);
  const productUrl = `https://bochuanvn.com/products/${slug}`;
  const pageImage = product.image;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={productUrl} />
        <meta property="og:type" content="product" />

        {/* Twitter Card */}
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* JSON-LD Breadcrumb */}
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
                "name": "Sản phẩm",
                "item": "https://bochuanvn.com/products"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "${t(product.titleKey)}",
                "item": "${productUrl}"
              }
            ]
          }
          `}
        </script>

        {/* JSON-LD Product */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "${t(product.titleKey)}",
            "image": ["${pageImage}"],
            "description": "${pageDescription}",
            "brand": {
              "@type": "Organization",
              "name": "CTY TNHH CÔNG NGHỆ THÔNG MINH BOCHUAN"
            },
            "offers": {
              "@type": "Offer",
              "url": "${productUrl}",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            }
          }
          `}
        </script>
      </Helmet>

      <div className="max-w-6xl px-4 py-10 mx-auto mt-16 mb-16">
        <h1 className="mb-4 text-3xl font-bold text-center text-blue-700">
          {t("products.detail_title")}
        </h1>

        <div className="grid items-start grid-cols-1 gap-10 md:grid-cols-2">
          {/* Hình ảnh bên trái */}
          <img
            src={pageImage}
            alt={t(product.titleKey)}
            loading="lazy"
            className="w-full h-[350px] object-contain border rounded shadow"
          />

          {/* Nội dung bên phải */}
          <div style={{ whiteSpace: "pre-line" }}>
            <h1 className="mb-4 text-2xl font-bold text-blue-700">{t(product.titleKey)}</h1>
            <p className="mb-12 text-gray-700">{pageDescription}</p>

            {/* Hiển thị bảng chi tiết tùy theo sản phẩm */}
            <div>
              {product.descriptionKey === "products.descriptions.maydanthung6" && <MayDongThung6VI />}
              {product.descriptionKey === "products.descriptions.maymothung1" && <MayMoThung1 />}
              {product.descriptionKey === "products.descriptions.mayquanmangtudong1" && <MayQuanMang1 />}
              {product.descriptionKey === "products.descriptions.mayquanmangtudong2" && <MayQuanMang2 />}
              {product.descriptionKey === "products.descriptions.mayquanmangtudong3" && <MayQuanMang3 />}
              {product.descriptionKey === "products.descriptions.maydanthung2" && <MayDanThung2 />}
              {product.descriptionKey === "products.descriptions.tramrobot1" && <TramRobot1 />}
              {product.descriptionKey === "products.descriptions.maydannhantudong1" && <MayDanNhan1 />}
              {product.descriptionKey === "products.descriptions.maydannhantudong2" && <MayDanNhan2 />}
              {product.descriptionKey === "products.descriptions.maydaithung7" && <MayDaiThung7 />}
              {product.descriptionKey === "products.descriptions.maydaithung4" && <MayDaiThung4 />}
              {product.descriptionKey === "products.descriptions.maysietvitbantudong1" && <MaySietVit1 />}
              {product.descriptionKey === "products.descriptions.maydonggoicattudong1" && <MayDongGoiCat1 />}
              {product.descriptionKey === "products.descriptions.maydonggoicattudong2" && <MayDongGoiCat2 />}
              {product.descriptionKey === "products.descriptions.mayconhietkieuphunkhi1" && <MayCoMangNhietPhunKhi1 />}
              {product.descriptionKey === "products.descriptions.mayconhietkieutuanhoantrong1" && <MayCoMangNhietTuanHoan1 />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
