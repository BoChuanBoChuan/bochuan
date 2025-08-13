import { useTranslation } from "react-i18next";

const TramRobot1 = () => {
  const { t } = useTranslation();

  return (
    <table className="w-full text-sm text-center border border-gray-300">
      <thead>
        <tr className="font-semibold bg-blue-100">
          <th className="px-3 py-2 border" colSpan={2}>
            {t("TramRobot1.title")}
          </th>
          <th className="px-3 py-2 border">XZ–WP–20</th>
          <th className="px-3 py-2 border">XZ–WP–40</th>
        </tr>
      </thead>
      <tbody>
        {/* Tốc độ xếp hàng */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("TramRobot1.data.0.label")}
          </td>
          <td className="px-3 py-2 border">{t("TramRobot1.data.0.wp20")}</td>
          <td className="px-3 py-2 border">{t("TramRobot1.data.0.wp40")}</td>
        </tr>

        {/* Kích thước pallet */}
        <tr>
          <td className="px-3 py-2 border" rowSpan={3}>
            {t("TramRobot1.data.1.group")}
          </td>
          <td className="px-3 py-2 border">{t("TramRobot1.data.1.label")}</td>
          <td className="px-3 py-2 border">{t("TramRobot1.data.1.wp20")}</td>
          <td className="px-3 py-2 border">{t("TramRobot1.data.1.wp40")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("TramRobot1.data.2.label")}</td>
          <td className="px-3 py-2 border">{t("TramRobot1.data.2.wp20")}</td>
          <td className="px-3 py-2 border">{t("TramRobot1.data.2.wp40")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("TramRobot1.data.3.label")}</td>
          <td className="px-3 py-2 border">{t("TramRobot1.data.3.wp20")}</td>
          <td className="px-3 py-2 border">{t("TramRobot1.data.3.wp40")}</td>
        </tr>

        {/* Các thông số còn lại */}
        {Array.from({ length: 8 }, (_, i) => (
          <tr key={i + 4}>
            <td className="px-3 py-2 border" colSpan={2}>
              {t(`TramRobot1.data.${i + 4}.label`)}
            </td>
            <td className="px-3 py-2 border">{t(`TramRobot1.data.${i + 4}.wp20`)}</td>
            <td className="px-3 py-2 border">{t(`TramRobot1.data.${i + 4}.wp40`)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TramRobot1;
