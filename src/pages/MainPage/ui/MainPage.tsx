import { useTranslation } from "react-i18next";

function MainPage() {
  const { t } = useTranslation("mainpage");

  return (
    <div className="">
      <div className="">{t("main page")}</div>
    </div>
  );
}

export default MainPage;
