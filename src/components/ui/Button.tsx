import { IButton } from "@/interfaces/button.interface";
import React from "react";

const Button = ({
  label,
  type,
  icon,
  iconPosition,
  onClick,
  className,
}: IButton) => {
  return (
    <button onClick={onClick} type={type} className={className}>
      {iconPosition === "left" && icon && <span className="mr-2">{icon}</span>}
      <span>{label}</span>
      {iconPosition === "right" && icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
