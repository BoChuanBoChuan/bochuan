import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import logoVn from "../assets/img/flag/vn.png";
import logoEn from "../assets/img/flag/us.png";
import logoCn from "../assets/img/flag/cn.png";

const languages = [
  { code: 'vi', label: 'Tiếng Việt', flag: logoVn },
  { code: 'en', label: 'English', flag: logoEn },
  { code: 'zh', label: '中文', flag: logoCn },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center px-3 py-1 space-x-2 border border-gray-300 rounded hover:bg-gray-100"
      >
        <img src={currentLang.flag} alt={currentLang.code} className="w-5 h-5" />
        <span className="text-sm">{currentLang.label}</span>
      </button>

      {open && (
        <div className="absolute right-0 z-10 w-40 mt-2 bg-white border rounded shadow">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="flex items-center px-3 py-2 space-x-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setOpen(false);
              }}
            >
              <img src={lang.flag} alt={lang.code} className="w-5 h-5" />
              <span className="text-sm">{lang.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
