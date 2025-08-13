import { useTranslation } from "react-i18next";

const MayQuanMang3 = () => {
  const { t } = useTranslation();

  return (
    <table className="w-full text-sm text-center border border-gray-300">
      <thead>
        <tr className="font-semibold bg-blue-100">
          <th className="px-3 py-2 border" colSpan={2}>
            {t("mayQuanMang3.title")}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-3 py-2 border">{t("mayQuanMang3.labels.power")}</td>
          <td className="px-3 py-2 border">{t("mayQuanMang3.values.powerB")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("mayQuanMang3.labels.speed")}</td>
          <td className="px-3 py-2 border">{t("mayQuanMang3.values.speedB")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("mayQuanMang3.labels.diameter")}</td>
          <td className="px-3 py-2 border">{t("mayQuanMang3.values.diameterB")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("mayQuanMang3.labels.postHeight")}</td>
          <td className="px-3 py-2 border">{t("mayQuanMang3.values.postHeightB")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("mayQuanMang3.labels.workHeight")}</td>
          <td className="px-3 py-2 border">{t("mayQuanMang3.values.workHeightB")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("mayQuanMang3.labels.load")}</td>
          <td className="px-3 py-2 border">{t("mayQuanMang3.values.loadB")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("mayQuanMang3.labels.film")}</td>
          <td className="px-3 py-2 border">{t("mayQuanMang3.values.filmB")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("mayQuanMang3.labels.size")}</td>
          <td className="px-3 py-2 border">{t("mayQuanMang3.values.sizeB")}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MayQuanMang3;
