import * as React from "react";
import styles from "./container.module.scss";

const Container: React.FC<{children: React.ReactNode; className?: string}> = ({
  children,
  className,
  ...rest
}) => {
  let containerClassName = styles.container;

  if (className) {
    containerClassName = `${containerClassName} ${className}`;
  }

  return (
    <div className={containerClassName} {...rest}>
      {children}
    </div>
  );
};

export default Container;
