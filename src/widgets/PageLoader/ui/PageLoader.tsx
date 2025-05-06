import { Loader } from "shared/lib/Loader";
import s from "./PageLoader.m.scss";

export const PageLoader = () => {
  return (
    <div className={s.root}>
      <Loader />
    </div>
  );
};
