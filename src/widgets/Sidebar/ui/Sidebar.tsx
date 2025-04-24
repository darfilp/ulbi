import { useState } from "react";
import s from "./Sidebar.m.scss";
import clsx from "clsx";
import { ThemeToggle } from "widgets/themeToggle";

interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <div className={clsx(s.root, collapsed && s.root__collapsed)}>
      <div className="" onClick={onToggle}>
        toogle
      </div>
      <div className={s.switchers}>
        <ThemeToggle />
      </div>
    </div>
  );
};
