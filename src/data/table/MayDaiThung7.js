import { useTranslation } from "react-i18next";

const MayDaiThung7 = () => {
  const { t } = useTranslation();

  return (
    <table className="w-full text-sm text-center border border-gray-300">
      <thead>
        <tr className="font-semibold bg-blue-100">
          <th className="px-3 py-2 border" colSpan={2}>
            {t("maydaithung7.title")}
          </th>
          <th className="px-3 py-2 border">DB-201</th>
        </tr>
      </thead>
      <tbody>
        {/* Kích thước gói áp dụng */}
        <tr>
          <td className="px-3 py-2 border" rowSpan={2}>
            {t("maydaithung7.data.0.group")}
          </td>
           <td className="px-3 py-2 border">{t("maydaithung7.data.1.label")}</td>
          <td className="px-3 py-2 border">210–700</td>
        </tr>
        <tr>

              <td className="px-3 py-2 border">{t("maydaithung7.data.0.label")}</td>
          <td className="px-3 py-2 border">80–500</td>
        
        </tr>

        {/* Nguồn điện */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("maydaithung7.data.2.label")}
          </td>
          <td className="px-3 py-2 border">380V 50Hz 1.25KW</td>
        </tr>

        {/* Tốc độ đóng gói */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("maydaithung7.data.3.label")}
          </td>
          <td className="px-3 py-2 border">{t("maydaithung7.data.8.label")}</td>
        </tr>

        {/* Dây đai đóng gói phù hợp / Quy cách */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("maydaithung7.data.4.label")}
          </td>
          <td className="px-3 py-2 border">
            {t("maydaithung7.data.4.value")}
          </td>
        </tr>

        {/* Kích thước khung máy (mm) */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("maydaithung7.data.5.label")}
          </td>
          <td className="px-3 py-2 border">
            {t("maydaithung7.data.5.value")}
          </td>
        </tr>

        {/* Chiều cao bàn làm việc */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("maydaithung7.data.6.label")}
          </td>
          <td className="px-3 py-2 border">
            {t("maydaithung7.data.6.value")}
          </td>
        </tr>

        {/* Kích thước máy (Dài × Rộng × Cao mm) */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("maydaithung7.data.7.label")}
          </td>
          <td className="px-3 py-2 border">L1580 × W650 × H1450</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MayDaiThung7;
