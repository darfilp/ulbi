import clsx from "clsx";
import s from "./Header.m.scss";
import { Link } from "shared/lib/Link";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <div className={clsx(s.root, className)}>
      <Link to="/" end>
        MainPage
      </Link>
      <Link to="/about" end>
        AboutPage
      </Link>
    </div>
  );
};
