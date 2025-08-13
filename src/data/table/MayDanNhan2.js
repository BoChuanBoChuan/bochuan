import { useTranslation } from "react-i18next";

const MayDanNhanTuDong2 = () => {
  const { t } = useTranslation();

  return (
    <table className="w-full text-sm text-center border border-gray-300">
      <thead>
        <tr className="font-semibold bg-blue-100">
          <th className="px-3 py-2 border" colSpan={2}>
            {t("maydannhantudong2.title")}
          </th>
          <th className="px-3 py-2 border">ALB-260</th>
        </tr>
      </thead>
      <tbody>
        {/* Kích thước hộp giấy áp dụng */}
        <tr>
          <td className="px-3 py-2 border" rowSpan={2}>
            {t("maydannhantudong2.data.0.group")}
          </td>
          <td className="px-3 py-2 border">{t("maydannhantudong2.data.0.label")}</td>
          <td className="px-3 py-2 border">{t("maydannhantudong2.data.0.value")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("maydannhantudong2.data.1.label")}</td>
          <td className="px-3 py-2 border">{t("maydannhantudong2.data.1.value")}</td>
        </tr>

        {/* Nguồn điện */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("maydannhantudong2.data.2.label")}
          </td>
          <td className="px-3 py-2 border">{t("maydannhantudong2.data.2.value")}</td>
        </tr>

        {/* Áp suất khí nén */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("maydannhantudong2.data.3.label")}
          </td>
          <td className="px-3 py-2 border">{t("maydannhantudong2.data.3.value")}</td>
        </tr>

        {/* Tốc độ dán nhãn */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("maydannhantudong2.data.4.label")}
          </td>
          <td className="px-3 py-2 border">{t("maydannhantudong2.data.4.value")}</td>
        </tr>

        {/* Chất liệu để giấy nhãn phù hợp */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("maydannhantudong2.data.5.label")}
          </td>
          <td className="px-3 py-2 border">{t("maydannhantudong2.data.5.value")}</td>
        </tr>

        {/* Kích thước máy */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("maydannhantudong2.data.6.label")}
          </td>
          <td className="px-3 py-2 border">
            {t("maydannhantudong2.data.6.value")} {t("maydannhantudong2.note")}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MayDanNhanTuDong2;
