import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t } = useTranslation("aboutpage");

  return (
    <div className="">
      <div className="">{t("about page")}</div>
    </div>
  );
}

export default AboutPage;
