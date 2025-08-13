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
  const { id } = useParams();
  const { t } = useTranslation();

  const product = devices.find((p) => p.id.toString() === id);

  if (!product) return <div className="p-4">{t("products.not_found")}</div>;

  return (
    <div className="max-w-6xl px-4 py-10 mx-auto mt-16 mb-16">
      <h1 className="mb-4 text-3xl font-bold text-center text-blue-700">
        {t("products.detail_title")}
      </h1>
      <div className="grid items-start grid-cols-1 gap-10 md:grid-cols-2">
        {/* Hình ảnh bên trái */}
        <img
          src={product.image}
          alt={t(product.titleKey)}
          className="w-full h-[350px] object-contain border rounded shadow"
        />

        {/* Nội dung bên phải */}
        <div style={{ whiteSpace: "pre-line" }}>
          <h1 className="mb-4 text-2xl font-bold text-blue-700">
            {t(product.titleKey)}
          </h1>

          <p className="mb-12 text-gray-700">{t(product.descriptionKey)}</p>

          <div >
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
  );
}
