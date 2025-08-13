import React from "react";
import { useTranslation } from "react-i18next";

const MayDongThung6 = () => {
  const { t } = useTranslation();

  return (
    <table className="w-full text-sm text-center border border-gray-300">
      <thead>
        <tr className="font-semibold bg-blue-200">
          <th className="px-3 py-2 border" colSpan={2}>
            {t("mayDongThung6.title")}
          </th>
          <th className="px-3 py-2 border">{t("mayDongThung6.model")}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-3 py-2 border" rowSpan={3}>
            {t("mayDongThung6.range")}
          </td>
          <td className="px-3 py-2 border">{t("mayDongThung6.length")}</td>
          <td className="px-3 py-2 border">{t("mayDongThung6.value.length")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("mayDongThung6.width")}</td>
          <td className="px-3 py-2 border">{t("mayDongThung6.value.width")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("mayDongThung6.height")}</td>
          <td className="px-3 py-2 border">{t("mayDongThung6.value.height")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("mayDongThung6.power")}
          </td>
          <td className="px-3 py-2 border">{t("mayDongThung6.value.power")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("mayDongThung6.pressure")}
          </td>
          <td className="px-3 py-2 border">{t("mayDongThung6.value.pressure")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("mayDongThung6.speed")}
          </td>
          <td className="px-3 py-2 border">{t("mayDongThung6.value.speed")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("mayDongThung6.tape")}
          </td>
          <td className="px-3 py-2 border">{t("mayDongThung6.value.tape")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("mayDongThung6.machineSize")}
          </td>
          <td className="px-3 py-2 border">{t("mayDongThung6.value.machineSize")}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MayDongThung6;
