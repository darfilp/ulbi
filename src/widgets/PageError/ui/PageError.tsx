import { useTranslation } from "react-i18next";
import { Button } from "shared/lib/Button";

export const PageError = () => {
  const { t } = useTranslation();
  return (
    <div style={{ backgroundColor: "green" }}>
      {t("An error occurred in the application")}
      <Button onClick={() => window.location.reload()}>
        {t("Reload page")}
      </Button>
    </div>
  );
};
