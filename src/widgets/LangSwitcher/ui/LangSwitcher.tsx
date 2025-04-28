import { useTranslation } from "react-i18next";
import { Button } from "shared/lib/Button";

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation();

  const changeLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return <Button onClick={() => changeLang()}>{t("lang")}</Button>;
};
