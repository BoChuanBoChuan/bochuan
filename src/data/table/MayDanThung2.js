import { useTranslation } from "react-i18next";

const AutoCartonSealer = () => {
  const { t } = useTranslation();

  return (
    <table className="w-full text-sm text-center border border-gray-300">
      <thead>
        <tr className="font-semibold bg-blue-100">
          <th className="px-3 py-2 border" colSpan={2}>{t("MayDanThung2.title")}</th>
          <th className="px-3 py-2 border">{t("MayDanThung2.models.fx5050z")}</th>
          <th className="px-3 py-2 border">{t("MayDanThung2.models.fx5050zl")}</th>
        </tr>
      </thead>
      <tbody>
        {/* Carton size range */}
        <tr>
          <td className="px-3 py-2 border" rowSpan={3}>
            {t("MayDanThung2.labels.cartonSize")}
          </td>
          <td className="px-3 py-2 border">{t("MayDanThung2.labels.length")}</td>
          <td className="px-3 py-2 border">{t("MayDanThung2.values.fx5050z.length")}</td>
          <td className="px-3 py-2 border">{t("MayDanThung2.values.fx5050zl.length")}</td>
          
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("MayDanThung2.labels.width")}</td>

          <td className="px-3 py-2 border">{t("MayDanThung2.values.fx5050z.width")}</td>
          <td className="px-3 py-2 border">{t("MayDanThung2.values.fx5050zl.width")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("MayDanThung2.labels.height")}</td>

          <td className="px-3 py-2 border">{t("MayDanThung2.values.fx5050z.height")}</td>
          <td className="px-3 py-2 border">{t("MayDanThung2.values.fx5050zl.height")}</td>
        </tr>

        {/* Power */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>{t("MayDanThung2.labels.power")}</td>
          <td className="px-3 py-2 border">{t("MayDanThung2.values.fx5050z.power")}</td>
          <td className="px-3 py-2 border">{t("MayDanThung2.values.fx5050zl.power")}</td>
        </tr>

        {/* Air pressure */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>{t("MayDanThung2.labels.airPressure")}</td>
          <td className="px-3 py-2 border">{t("MayDanThung2.values.fx5050z.airPressure")}</td>
          <td className="px-3 py-2 border">{t("MayDanThung2.values.fx5050zl.airPressure")}</td>
        </tr>

        {/* Speed */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>{t("MayDanThung2.labels.speed")}</td>
          <td className="px-3 py-2 border">{t("MayDanThung2.values.fx5050z.speed")}</td>
          <td className="px-3 py-2 border">{t("MayDanThung2.values.fx5050zl.speed")}</td>
        </tr>

        {/* Tape */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>{t("MayDanThung2.labels.tape")}</td>
          <td className="px-3 py-2 border" colSpan={2}>{t("MayDanThung2.values.fx5050z.tape")}</td>
   
        </tr>

        {/* Machine size */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>{t("MayDanThung2.labels.machineSize")}</td>
          <td className="px-3 py-2 border" colSpan={2}>{t("MayDanThung2.values.fx5050z.machineSize")}</td>
    
        </tr>
      </tbody>
    </table>
  );
};

export default AutoCartonSealer;
