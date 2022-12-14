import { ReactNode } from "react";
import s from "./Button.module.css";

interface Button {
  text?: string;
  icon?: ReactNode | ReactNode[];
  onClick?: () => void;
  type: "primary" | "secondary";
}

const Button = ({ text, icon, onClick, type }: Button) => {
  return (
    <button onClick={onClick} className={`btn ${s[type]}`}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
