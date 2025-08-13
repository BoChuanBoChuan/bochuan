import { useTranslation } from "react-i18next";

const MayQuanMang1 = () => {
  const { t } = useTranslation();

  return (
    <table className="w-full text-sm text-center border border-gray-300">
      <thead>
        <tr className="font-semibold bg-blue-100">
          <th className="px-3 py-2 border" colSpan={2}>
            {t("mayQuanMang1.title")}
          </th>
          <th className="px-3 py-2 border">{t("mayQuanMang1.model")}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>{t("mayQuanMang1.data.0.label")}</td>
          <td className="px-3 py-2 border">380V 50Hz</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>{t("mayQuanMang1.data.1.label")}</td>
          <td className="px-3 py-2 border">0–10</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>{t("mayQuanMang1.data.2.label")}</td>
          <td className="px-3 py-2 border">Φ2000</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>{t("mayQuanMang1.data.3.label")}</td>
          <td className="px-3 py-2 border">2400 (2000, 2700, 3200)</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>{t("mayQuanMang1.data.4.label")}</td>
          <td className="px-3 py-2 border">{t("mayQuanMang1.data.4.value")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>{t("mayQuanMang1.data.5.label")}</td>
          <td className="px-3 py-2 border">≥450mm</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>{t("mayQuanMang1.data.6.label")}</td>
          <td className="px-3 py-2 border">2000KG</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>{t("mayQuanMang1.data.7.label")}</td>
          <td className="px-3 py-2 border">{t("mayQuanMang1.data.7.value")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>{t("mayQuanMang1.data.8.label")}</td>
          <td className="px-3 py-2 border">2440 × 2000 × 2475</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MayQuanMang1;
