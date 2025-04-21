import { ButtonHTMLAttributes } from "react";
import s from "./Buttom.m.scss";
import clsx from "clsx";

enum ButtonTheme {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    ...otherProps
  } = props;

  return (
    <button
      className={clsx(s.root, s[`root__${theme}`], className)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
