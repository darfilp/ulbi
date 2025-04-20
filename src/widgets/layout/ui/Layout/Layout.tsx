import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import s from "./Layout.m.scss";

export const Layout = () => {
  return (
    <div className={s.root}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
