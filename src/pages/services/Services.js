import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();
  return (
    <div className="max-w-6xl px-4 py-10 pt-24 mx-auto pb-20">
      {/* <h1 className="mb-4 text-2xl font-bold">{t("nav.about")}</h1> */}
      <h1>Dịch vụ</h1>

      <p>
        {/* Thêm nội dung giới thiệu ở đây */}
        Chúng tôi là công ty chuyên cung cấp các giải pháp đóng gói thông minh...
      </p>
    </div>
  );
}
