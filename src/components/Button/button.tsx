import * as React from "react";
import styles from "./button.module.scss";

const Button: React.FC<{
  children: React.ReactNode;
  className?: string;
  color?: string;
}> = ({children, className, color, ...rest}) => {
  let buttonClassName = styles.button;

  if (className) {
    buttonClassName = `${buttonClassName} ${className}`;
  }

  return (
    <button className={buttonClassName} data-color={color} {...rest}>
      {children}
    </button>
  );
};

export default Button;
