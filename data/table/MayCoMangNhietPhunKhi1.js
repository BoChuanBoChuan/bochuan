import React from "react";
import { useTranslation } from "react-i18next";

const MayCoMangNhietPhunKhi = () => {
  const { t } = useTranslation();

  return (
    <table className="w-full text-sm text-center border border-collapse border-gray-300">
      <thead>
       
        <tr className="font-bold text-black bg-blue-50">
          <th className="px-3 py-2 border">   {t("mayCoMangNhietPhunKhi.title")}</th>
          <th className="px-3 py-2 border">BSP6040</th>
          <th className="px-3 py-2 border">BSP7050</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-3 py-2 font-bold border">{t("mayCoMangNhietPhunKhi.dienNguon")}</td>
          <td className="px-3 py-2 border">{t("mayCoMangNhietPhunKhi.bsp6040.dienNguon")}</td>
          <td className="px-3 py-2 border">{t("mayCoMangNhietPhunKhi.bsp7050.dienNguon")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 font-bold border">{t("mayCoMangNhietPhunKhi.kichThuocSanPham")}</td>
          <td className="px-3 py-2 border">{t("mayCoMangNhietPhunKhi.bsp6040.kichThuocSanPham")}</td>
          <td className="px-3 py-2 border">{t("mayCoMangNhietPhunKhi.bsp7050.kichThuocSanPham")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 font-bold border">{t("mayCoMangNhietPhunKhi.taiTrongBangTai")}</td>
          <td className="px-3 py-2 border">{t("mayCoMangNhietPhunKhi.bsp6040.taiTrongBangTai")}</td>
          <td className="px-3 py-2 border">{t("mayCoMangNhietPhunKhi.bsp7050.taiTrongBangTai")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 font-bold border">{t("mayCoMangNhietPhunKhi.tocDoBangTai")}</td>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("mayCoMangNhietPhunKhi.bsp6040.tocDoBangTai")}
          </td>
        </tr>
        <tr>
          <td className="px-3 py-2 font-bold border">{t("mayCoMangNhietPhunKhi.chatLieuBangTai")}</td>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("mayCoMangNhietPhunKhi.bsp6040.chatLieuBangTai")}
          </td>
        </tr>
        <tr>
          <td className="px-3 py-2 font-bold border">{t("mayCoMangNhietPhunKhi.kichThuocBuongCo")}</td>
          <td className="px-3 py-2 border">{t("mayCoMangNhietPhunKhi.bsp6040.kichThuocBuongCo")}</td>
          <td className="px-3 py-2 border">{t("mayCoMangNhietPhunKhi.bsp7050.kichThuocBuongCo")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 font-bold border">{t("mayCoMangNhietPhunKhi.kichThuocMay")}</td>
          <td className="px-3 py-2 border">{t("mayCoMangNhietPhunKhi.bsp6040.kichThuocMay")}</td>
          <td className="px-3 py-2 border">{t("mayCoMangNhietPhunKhi.bsp7050.kichThuocMay")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 font-bold border">{t("mayCoMangNhietPhunKhi.loaiMangPhuHop")}</td>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("mayCoMangNhietPhunKhi.bsp6040.loaiMangPhuHop")}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MayCoMangNhietPhunKhi;
