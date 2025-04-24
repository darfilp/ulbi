import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import s from "./Layout.m.scss";
import { Sidebar } from "widgets/Sidebar";

export const Layout = () => {
  return (
    <div className={s.root}>
      <Header />
      <main className={s.wrapper}>
        <Sidebar />
        <div className={s.page}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
