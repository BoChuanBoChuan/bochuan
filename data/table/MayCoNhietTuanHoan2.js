import React from "react";
import { useTranslation } from "react-i18next";

const MayCoMangNhietTuanHoan = () => {
  const { t } = useTranslation();

  return (
    <table className="w-full text-sm text-center border border-collapse border-gray-300">
      <thead>
        
        <tr className="font-bold bg-blue-100">
          <th className="px-3 py-2 border">   {t("mayCoMangNhietTuanHoan.title")}</th>
          <th className="px-3 py-2 border">BSN4020</th>
          <th className="px-3 py-2 border">BSN5030</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-3 py-2 font-medium border">
            {t("mayCoMangNhietTuanHoan.nguonDien")}
          </td>
          <td className="px-3 py-2 border">
            {t("mayCoMangNhietTuanHoan.bsn4020.nguonDien")}
          </td>
          <td className="px-3 py-2 border">
            {t("mayCoMangNhietTuanHoan.bsn5030.nguonDien")}
          </td>
        </tr>

        <tr>
          <td className="px-3 py-2 font-medium border">
            {t("mayCoMangNhietTuanHoan.kichThuocSanPham")}
          </td>
          <td className="px-3 py-2 border">
            {t("mayCoMangNhietTuanHoan.bsn4020.kichThuocSanPham")}
          </td>
          <td className="px-3 py-2 border">
            {t("mayCoMangNhietTuanHoan.bsn5030.kichThuocSanPham")}
          </td>
        </tr>

        <tr>
          <td className="px-3 py-2 font-medium border">
            {t("mayCoMangNhietTuanHoan.taiTrongBangTai")}
          </td>
          <td className="px-3 py-2 border">
            {t("mayCoMangNhietTuanHoan.bsn4020.taiTrongBangTai")}
          </td>
          <td className="px-3 py-2 border">
            {t("mayCoMangNhietTuanHoan.bsn5030.taiTrongBangTai")}
          </td>
        </tr>

        <tr>
          <td className="px-3 py-2 font-medium border">
            {t("mayCoMangNhietTuanHoan.tocDoBangTai")}
          </td>
         
          <td className="px-3 py-2 border" colSpan={2}>
            {t("mayCoMangNhietTuanHoan.bsn5030.tocDoBangTai")}
          </td>
        </tr>

        <tr>
          <td className="px-3 py-2 font-medium border">
            {t("mayCoMangNhietTuanHoan.chatLieuBangTai")}
          </td>
  
          <td className="px-3 py-2 border" colSpan={2}>
            {t("mayCoMangNhietTuanHoan.bsn5030.chatLieuBangTai")}
          </td>
        </tr>

        <tr>
          <td className="px-3 py-2 font-medium border">
            {t("mayCoMangNhietTuanHoan.kichThuocBuongCo")}
          </td>
          <td className="px-3 py-2 border">
            {t("mayCoMangNhietTuanHoan.bsn4020.kichThuocBuongCo")}
          </td>
          <td className="px-3 py-2 border">
            {t("mayCoMangNhietTuanHoan.bsn5030.kichThuocBuongCo")}
          </td>
        </tr>

        <tr>
          <td className="px-3 py-2 font-medium border">
            {t("mayCoMangNhietTuanHoan.kichThuocMay")}
          </td>
          <td className="px-3 py-2 border">
            {t("mayCoMangNhietTuanHoan.bsn4020.kichThuocMay")}
          </td>
          <td className="px-3 py-2 border">
            {t("mayCoMangNhietTuanHoan.bsn5030.kichThuocMay")}
          </td>
        </tr>

        <tr>
          <td className="px-3 py-2 font-medium border">
            {t("mayCoMangNhietTuanHoan.loaiMangPhuHop")}
          </td>
         
          <td className="px-3 py-2 border" colSpan={2}>
            {t("mayCoMangNhietTuanHoan.bsn5030.loaiMangPhuHop")}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MayCoMangNhietTuanHoan;
