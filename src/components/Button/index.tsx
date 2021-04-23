import React from "react";
import cn from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "link" | "outline";
  type?: "button" | "reset" | "submit";
  isFullWidth?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  className?: string;
}

const baseClasses =
  "text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150";

const variants = {
  solid: "bg-green-500 hover:bg-green-600 active:bg-green-700",
  link: "",
  outline: "",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "solid",
      children,
      className,
      isFullWidth = false,
      isDisabled,
      isLoading,
    },
    ref
  ) => {
    return (
      <button
        disabled={isDisabled || isLoading}
        ref={ref}
        className={cn(baseClasses, variants[variant], className, {
          "w-full": isFullWidth,
        })}
      >
        {children}
      </button>
    );
  }
);
