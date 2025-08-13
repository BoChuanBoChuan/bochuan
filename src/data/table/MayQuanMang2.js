import { useTranslation } from "react-i18next";

const MayQuanMang2 = () => {
  const { t } = useTranslation();

  return (
    <table className="w-full text-sm text-center border border-gray-300">
      <thead>
        <tr className="font-semibold bg-blue-100">
          <th className="px-3 py-2 border" colSpan={2}>
            {t("mayQuanMang2.title")}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-3 py-2 border">{t("mayQuanMang2.labels.power")}</td>
          <td className="px-3 py-2 border">{t("mayQuanMang2.values.power")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("mayQuanMang2.labels.speed")}</td>
          <td className="px-3 py-2 border">{t("mayQuanMang2.values.speed")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("mayQuanMang2.labels.diameter")}</td>
          <td className="px-3 py-2 border">{t("mayQuanMang2.values.diameter")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("mayQuanMang2.labels.postHeight")}</td>
          <td className="px-3 py-2 border">{t("mayQuanMang2.values.postHeight")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("mayQuanMang2.labels.workHeight")}</td>
          <td className="px-3 py-2 border">{t("mayQuanMang2.values.workHeight")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("mayQuanMang2.labels.load")}</td>
          <td className="px-3 py-2 border">{t("mayQuanMang2.values.load")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("mayQuanMang2.labels.film")}</td>
          <td className="px-3 py-2 border">{t("mayQuanMang2.values.film")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("mayQuanMang2.labels.size")}</td>
          <td className="px-3 py-2 border">{t("mayQuanMang2.values.size")}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MayQuanMang2;
