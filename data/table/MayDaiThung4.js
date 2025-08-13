import { useTranslation } from "react-i18next";

const MayDaiThung4 = () => {
  const { t } = useTranslation();

  return (
    <table className="w-full text-sm text-center border border-gray-300">
      <thead>
        <tr className="font-semibold bg-blue-100">
          <th className="px-3 py-2 border" colSpan={2}>
            {t("maydaithung4.title")}
          </th>
          <th className="px-3 py-2 border">{t("maydaithung4.model")}</th>
        </tr>
      </thead>
      <tbody>
        {/* Applicable Package Size */}
        <tr>
          <td className="px-3 py-2 border" rowSpan={2}>
            {t("maydaithung4.data.0.group")}
          </td>
          <td className="px-3 py-2 border">
            {t("maydaithung4.data.0.items.0.label")}
          </td>
          <td className="px-3 py-2 border">
            {t("maydaithung4.data.0.items.0.value")}
          </td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">
            {t("maydaithung4.data.0.items.1.label")}
          </td>
          <td className="px-3 py-2 border">
            {t("maydaithung4.data.0.items.1.value")}
          </td>
        </tr>

        {/* Power Supply */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("maydaithung4.data.1.label")}
          </td>
          <td className="px-3 py-2 border">
            {t("maydaithung4.data.1.value")}
          </td>
        </tr>

        {/* Strapping Speed */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("maydaithung4.data.2.label")}
          </td>
          <td className="px-3 py-2 border">
            {t("maydaithung4.data.2.value")}
          </td>
        </tr>

        {/* Strap Spec */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("maydaithung4.data.3.label")}
          </td>
          <td className="px-3 py-2 border">
            {t("maydaithung4.data.3.value")}
          </td>
        </tr>

        {/* Frame Size */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("maydaithung4.data.4.label")}
          </td>
          <td className="px-3 py-2 border">
            {t("maydaithung4.data.4.value")}
          </td>
        </tr>

        {/* Table Height */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("maydaithung4.data.5.label")}
          </td>
          <td className="px-3 py-2 border">
            {t("maydaithung4.data.5.value")}
          </td>
        </tr>

        {/* Machine Size */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("maydaithung4.data.6.label")}
          </td>
          <td className="px-3 py-2 border">
            {t("maydaithung4.data.6.value")}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MayDaiThung4;
