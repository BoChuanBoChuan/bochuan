import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { devices as allDevices } from "../data/ProductsData";

const devices = allDevices.filter((device) => {
  return (
    (device.name === "mayquanmangtudong1" && device.image.includes("mayquanmangtudong3")) ||
    (device.name === "mamrung1" && device.image.includes("mamrung7")) ||
    (device.name === "maytudonghoathietketheoyeucau" && device.image.includes("maytudonghoathietketheoyeucau1")) ||
    (device.name === "robot6truc" && device.image.includes("robotkhopnoi6truc1")) ||
    device.name === "maydonggoicattudong1" ||
    device.name === "maysietvittudongtoado3"
  );
});

export default function Product() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 py-16">
      <h2 className="mb-10 text-3xl font-bold text-center text-blue-900 uppercase">
        {t("product.mainProducts")}
      </h2>

      <div className="flex flex-row flex-wrap justify-center gap-6">
        {devices.map((device) => (
          <div
            key={device.id}
            onClick={() => navigate(`/products/${device.id}`)}
            className="w-[200px] h-[320px] bg-white rounded-xl border border-gray-200 shadow hover:shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 flex flex-col"
          >
            <div className="w-full h-[160px] bg-gray-50 rounded-t-xl flex items-center justify-center overflow-hidden">
              <img
                src={device.image}
                alt={device.name}
                className="object-contain max-w-full max-h-full p-3"
              />
            </div>
            <div className="flex items-center justify-center flex-grow px-3 py-4 overflow-hidden text-center">
              <p className="text-sm font-medium leading-snug text-gray-800 line-clamp-3">
                {t(`products.${device.name}`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
