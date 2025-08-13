import React from "react";
import { useTranslation } from "react-i18next";
import MayDongGoiCat1 from "./MayDongGoiCat1";

const MayDongGoiCat2 = () => {
  const { t } = useTranslation();

  return (
    <table className="w-full text-sm text-center border border-collapse border-gray-300">
      <thead>
        <tr className="font-bold text-black bg-blue-100">
          <th className="px-3 py-2 border">{t("MayDongGoiCat2.header")}</th>
          <th className="px-3 py-2 border"></th>
          <th className="px-3 py-2 border">BF-450</th>
          <th className="px-3 py-2 border">BF-550</th>
        </tr>
      </thead>
      <tbody>
        {/* Phạm vi kích thước sản phẩm */}
        <tr>
          <td className="px-3 py-2 font-bold border" rowSpan={2}>
            {t("MayDongGoiCat2.phamViKichThuoc")}
          </td>
          <td className="px-3 py-2 border">{t("MayDongGoiCat2.daiCao1")}</td>
          <td className="px-3 py-2 border">{t("MayDongGoiCat2.bf450.daiCao1")}</td>
          <td className="px-3 py-2 border">{t("MayDongGoiCat2.bf550.daiCao1")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("MayDongGoiCat2.daiCao2")}</td>
          <td className="px-3 py-2 border">{t("MayDongGoiCat2.bf450.daiCao2")}</td>
          <td className="px-3 py-2 border">{t("MayDongGoiCat2.bf550.daiCao2")}</td>
        </tr>

        {/* Kích thước dao cắt */}
        <tr>
          <td className="px-3 py-2 font-bold border">{t("MayDongGoiCat2.kichThuocDaoCat")}</td>
          <td className="px-3 py-2 border">{t("MayDongGoiCat2.daiXRong")}</td>
          <td className="px-3 py-2 border">{t("MayDongGoiCat2.bf450.kichThuocDaoCat")}</td>
          <td className="px-3 py-2 border">{t("MayDongGoiCat2.bf550.kichThuocDaoCat")}</td>
        </tr>

        {/* Nguồn điện */}
        <tr>
          <td className="px-3 py-2 font-bold border">{t("MayDongGoiCat2.nguonDien")}</td>
          <td className="px-3 py-2 border"></td>
          <td className="px-3 py-2 border">{t("MayDongGoiCat2.bf450.nguonDien")}</td>
          <td className="px-3 py-2 border">{t("MayDongGoiCat2.bf550.nguonDien")}</td>
        </tr>

        {/* Áp suất khí nén */}
        <tr>
          <td className="px-3 py-2 font-bold border">{t("MayDongGoiCat2.apSuatKhiNen")}</td>
          <td className="px-3 py-2 border"></td>
          <td className="px-3 py-2 border"></td>

          <td className="px-3 py-2 border">{t("MayDongGoiCat2.apSuatValue")}</td>
        </tr>

        {/* Tốc độ đóng gói */}
        <tr>
          <td className="px-3 py-2 font-bold border">{t("MayDongGoiCat2.tocDoDongGoi")}</td>
          <td className="px-3 py-2 border"></td>
          <td className="px-3 py-2 border"></td>

          <td  className="px-3 py-2 border">{t("MayDongGoiCat2.tocDoValue")}</td>
        </tr>

        {/* Màng phù hợp */}
        <tr>
          <td className="px-3 py-2 font-bold border">{t("MayDongGoiCat2.mangPhuHop")}</td>
          <td className="px-3 py-2 border"></td>
          <td className="px-3 py-2 border"></td>

          <td className="px-3 py-2 border">{t("MayDongGoiCat2.mangCoNhiet")}</td>
        </tr>

        {/* Kích thước máy */}
        <tr>
          <td className="px-3 py-2 font-bold border">{t("MayDongGoiCat2.kichThuocMay")}</td>
          <td className="px-3 py-2 border"></td>
          <td className="px-3 py-2 border">{t("MayDongGoiCat2.bf450.kichThuocMay")}</td>
          <td className="px-3 py-2 border">{t("MayDongGoiCat2.bf550.kichThuocMay")}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MayDongGoiCat2;
