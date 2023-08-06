import { ButtonHTMLAttributes, FC } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  icon?: React.ReactNode;
}
const Button: FC<ButtonProps> = (props) => {
  const { icon, children, className, ...rest } = props;
  return (
    <button className={`app-button ${className}`} {...rest}>
      <span>{icon}</span>
      <span>{children}</span>
    </button>
  );
};

export default Button;
