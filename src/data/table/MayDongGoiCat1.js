import React from "react";
import { useTranslation } from "react-i18next";

const MayDongGoiCat1 = () => {
  const { t } = useTranslation();

  return (
    <table className="w-full text-sm text-center border border-collapse border-gray-300">
      <thead>
        <tr className="font-bold text-black bg-blue-100">
          <th className="px-3 py-2 border">{t("mayDongGoiCat1.header1")}</th>
          <th className="px-3 py-2 border"></th>
          <th className="px-3 py-2 border">FQL-450</th>
          <th className="px-3 py-2 border">FQL-550</th>
        </tr>
      </thead>
      <tbody>
        {/* Kích thước sản phẩm phù hợp */}
        <tr>
          <td className="px-3 py-2 font-bold align-middle border" rowSpan={2}>
            {t("mayDongGoiCat1.kichThuocSanPhamPhuHop")}
          </td>
          <td className="px-3 py-2 border">{t("mayDongGoiCat1.daiCao1")}</td>
          <td className="px-3 py-2 border">{t("mayDongGoiCat1.fql450.daiCao1")}</td>
          <td className="px-3 py-2 border">{t("mayDongGoiCat1.fql550.daiCao1")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("mayDongGoiCat1.daiCao2")}</td>
          <td className="px-3 py-2 border">{t("mayDongGoiCat1.fql450.daiCao2")}</td>
          <td className="px-3 py-2 border">{t("mayDongGoiCat1.fql550.daiCao2")}</td>
        </tr>

        {/* Kích thước dao cắt */}
        <tr>
          <td className="px-3 py-2 font-bold border">{t("mayDongGoiCat1.kichThuocDaoCat")}</td>
          <td className="px-3 py-2 border">{t("mayDongGoiCat1.daiXRong")}</td>
          <td className="px-3 py-2 border">{t("mayDongGoiCat1.fql450.kichThuocDaoCat")}</td>
          <td className="px-3 py-2 border">{t("mayDongGoiCat1.fql550.kichThuocDaoCat")}</td>
        </tr>

        {/* Điện nguồn */}
        <tr>
          <td className="px-3 py-2 font-bold border">{t("mayDongGoiCat1.dienNguon")}</td>
          <td className="px-3 py-2 border"></td>
          <td className="px-3 py-2 border" style={{ whiteSpace: "pre-line" }}>{t("mayDongGoiCat1.fql450.dienNguon")}</td>
          <td className="px-3 py-2 border" style={{ whiteSpace: "pre-line" }}>{t("mayDongGoiCat1.fql550.dienNguon")}</td>
        </tr>

        {/* Áp suất khí nén */}
        <tr>
          <td className="px-3 py-2 font-bold border">{t("mayDongGoiCat1.apSuatKhiNen")}</td>
          <td className="px-3 py-2 border"></td>
          <td className="px-3 py-2 border" colSpan={2}>{t("mayDongGoiCat1.apSuatValue")}</td>
        </tr>

        {/* Tốc độ đóng gói */}
        <tr>
          <td className="px-3 py-2 font-bold border">{t("mayDongGoiCat1.tocDoDongGoi")}</td>
          <td className="px-3 py-2 border"></td>
          <td className="px-3 py-2 border" colSpan={2}>{t("mayDongGoiCat1.tocDoValue")}</td>
        </tr>

        {/* Màng phù hợp */}
        <tr>
          <td className="px-3 py-2 font-bold border">{t("mayDongGoiCat1.mangPhuHop")}</td>
          <td className="px-3 py-2 border"></td>
          <td className="px-3 py-2 border" colSpan={2}>{t("mayDongGoiCat1.mangCoNhiet")}</td>
        </tr>

        {/* Kích thước máy */}
        <tr>
          <td className="px-3 py-2 font-bold border">{t("mayDongGoiCat1.kichThuocMay")}</td>
          <td className="px-3 py-2 border"></td>
          <td className="px-3 py-2 border">{t("mayDongGoiCat1.fql450.kichThuocMay")}</td>
          <td className="px-3 py-2 border">{t("mayDongGoiCat1.fql550.kichThuocMay")}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MayDongGoiCat1;
