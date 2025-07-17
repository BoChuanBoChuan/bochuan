import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full py-4 text-sm text-center bg-gray-200 shadow-inner">
      {t('footer.contact')}
    </footer>
  );
}
