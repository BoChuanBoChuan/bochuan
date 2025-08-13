import React from "react";
import { useTranslation } from "react-i18next";

const maySietVit1 = () => {
  const { t } = useTranslation();
  const data = t("maySietVit1.data", { returnObjects: true });

  return (
    <table className="w-full text-sm text-center border border-gray-300">
      <tbody>
        {data.map((row, index) => {
          if (row.items && row.items.length > 0) {
            return (
              <React.Fragment key={index}>
                {row.items.map((item, subIndex) => (
                  <tr key={`${index}-${subIndex}`}>
                    {/* Cột nhóm chỉ render 1 lần và rowspan đủ số dòng */}
                    {subIndex === 0 && (
                      <td
                        rowSpan={row.items.length}
                        className="px-3 py-2 font-semibold text-left align-middle bg-blue-100 border"
                        style={{ width: "180px" }}
                      >
                        {row.group}
                      </td>
                    )}
                    <td className="px-3 py-2 text-left border">{item.label}</td>
                    <td className="px-3 py-2 border">{item.value}</td>
                  </tr>
                ))}
              </React.Fragment>
            );
          } else {
            return (
              <tr key={index}>
                <td className="px-3 py-2 font-medium border bg-gray-50">{row.group}</td>
                <td className="px-3 py-2 border">{row.label}</td>
                <td className="px-3 py-2 border">{row.value}</td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default maySietVit1;
