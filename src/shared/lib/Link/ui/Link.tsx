import { FC } from "react";
import s from "./Link.m.scss";
import { NavLink, NavLinkProps } from "react-router-dom";
import clsx from "clsx";

enum LinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface LinkProps extends NavLinkProps {
  theme?: LinkTheme.PRIMARY;
  className?: string;
}

export const Link: FC<LinkProps> = (props) => {
  const {
    className,
    children,
    theme = LinkTheme.SECONDARY,
    to,
    ...otherProps
  } = props;

  return (
    <NavLink
      className={clsx(s.root, s[`root__${theme}`], className)}
      to={to}
      end
      {...otherProps}
    >
      {children}
    </NavLink>
  );
};
