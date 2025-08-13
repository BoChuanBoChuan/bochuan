import { useTranslation } from "react-i18next";

const MayDanNhanTuDong1 = () => {
  const { t } = useTranslation();

  return (
    <table className="w-full text-sm text-center border border-gray-300">
      <thead>
        <tr className="font-semibold bg-blue-100">
          <th className="px-3 py-2 border" colSpan={2}>
            {t("maydannhantudong1.title")}
          </th>
          <th className="px-3 py-2 border">ALB-210</th>
        </tr>
      </thead>
      <tbody>
        {/* Kích thước hộp giấy áp dụng */}
        <tr>
          <td className="px-3 py-2 border" rowSpan={3}>
            {t("maydannhantudong1.data.0.group")}
          </td>
          <td className="px-3 py-2 border">{t("maydannhantudong1.data.0.label")}</td>
          <td className="px-3 py-2 border">L20–500</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("maydannhantudong1.data.1.label")}</td>
          <td className="px-3 py-2 border">W40–400</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("maydannhantudong1.data.2.label")}</td>
          <td className="px-3 py-2 border">H10–300</td>
        </tr>

        {/* Nguồn điện */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("maydannhantudong1.data.3.label")}
          </td>
          <td className="px-3 py-2 border">220V 50Hz 0.5KW</td>
        </tr>

        {/* Tốc độ truyền băng tải */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("maydannhantudong1.data.4.label")}
          </td>
          <td className="px-3 py-2 border">{t("maydannhantudong1.data.8.value")}</td>
        </tr>

        {/* Chất liệu giấy nhãn phù hợp */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("maydannhantudong1.data.5.label")}
          </td>
          <td className="px-3 py-2 border">{t("maydannhantudong1.data.7.label")}</td>
        </tr>

        {/* Kích thước máy */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("maydannhantudong1.data.6.label")}
          </td>
          <td className="px-3 py-2 border">L1500 × W700 × H1500   {t("maydannhantudong1.note")}  </td>
        </tr>
        
      </tbody>
    </table>
  );
};

export default MayDanNhanTuDong1;
