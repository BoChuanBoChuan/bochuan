import { useTranslation } from "react-i18next";

const MayMoThung1 = () => {
  const { t } = useTranslation();

  return (
    <table className="w-full text-sm text-center border border-gray-300">
      <thead>
        <tr className="font-semibold bg-blue-100">
          <th className="px-3 py-2 border" colSpan={2}>
            {t("mayMoThung1.title")}
          </th>
          <th className="px-3 py-2 border">KX-500</th>
          <th className="px-3 py-2 border">KX-650</th>
        </tr>
      </thead>
      <tbody>
        {/* Tốc độ mở thùng */}
        <tr>
          <td className="px-3 py-2 border" colSpan={2}>
            {t("mayMoThung1.data.0.group")}
          </td>
          <td className="px-3 py-2 border">{t("mayMoThung1.data.0.kx500")}</td>
          <td className="px-3 py-2 border">{t("mayMoThung1.data.0.kx650")}</td>
        </tr>

        {/* Phạm vi kích thước thùng carton */}
        <tr>
          <td className="px-3 py-2 border" rowSpan={3}>
            {t("mayMoThung1.data.1.group")}
          </td>
          <td className="px-3 py-2 border">{t("mayMoThung1.data.1.label")}</td>
          <td className="px-3 py-2 border">{t("mayMoThung1.data.1.kx500")}</td>
          <td className="px-3 py-2 border">{t("mayMoThung1.data.1.kx650")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("mayMoThung1.data.2.label")}</td>
          <td className="px-3 py-2 border">{t("mayMoThung1.data.2.kx500")}</td>
          <td className="px-3 py-2 border">{t("mayMoThung1.data.2.kx650")}</td>
        </tr>
        <tr>
          <td className="px-3 py-2 border">{t("mayMoThung1.data.3.label")}</td>
          <td className="px-3 py-2 border">{t("mayMoThung1.data.3.kx500")}</td>
          <td className="px-3 py-2 border">{t("mayMoThung1.data.3.kx650")}</td>
        </tr>

        {/* Các thông số còn lại */}
        <tr>
   
          <td className="px-3 py-2 border" colSpan={2}>{t("mayMoThung1.data.4.label")}</td>
          <td className="px-3 py-2 border" colSpan={2}>{t("mayMoThung1.data.4.kx500")}</td>
         
        </tr>
        <tr>
         
          <td className="px-3 py-2 border" colSpan={2}>{t("mayMoThung1.data.5.label")}</td>
          <td className="px-3 py-2 border" colSpan={2}>{t("mayMoThung1.data.5.kx500")}</td>
  
        </tr>
        <tr>
          
          <td colSpan={2} className="px-3 py-2 border">{t("mayMoThung1.data.6.label")}</td>
          <td className="px-3 py-2 border">{t("mayMoThung1.data.6.kx500")}</td>
          <td className="px-3 py-2 border">{t("mayMoThung1.data.6.kx650")}</td>
        </tr>
        <tr>
          
          <td colSpan={2} className="px-3 py-2 border">{t("mayMoThung1.data.7.label")}</td>
          <td className="px-3 py-2 border">{t("mayMoThung1.data.7.kx500")}</td>
          <td className="px-3 py-2 border">{t("mayMoThung1.data.7.kx650")}</td>
        </tr>
        <tr>
          
          <td colSpan={2} className="px-3 py-2 border">{t("mayMoThung1.data.8.label")}</td>
          <td className="px-3 py-2 border" colSpan={2}>{t("mayMoThung1.data.8.kx500")}</td>
        
        </tr>
        <tr>
          
          <td colSpan={2} className="px-3 py-2 border">{t("mayMoThung1.data.9.label")}</td>
          <td className="px-3 py-2 border" colSpan={2}>{t("mayMoThung1.data.9.kx500")}</td>
        
        </tr>
      </tbody>
    </table>
  );
};

export default MayMoThung1;
