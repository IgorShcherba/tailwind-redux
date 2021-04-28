import React, { InputHTMLAttributes } from "react";
import classNames, { TArg } from "tailwindcss-classnames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  name: string;
  id: string;
  labelClasses?: TArg;
  classes?: TArg;
  type?: string;
  isInvalid?: boolean;
}

const baseClasses = classNames(
  "appearance-none",
  "rounded-none",
  "relative",
  "block",
  "w-full",
  "px-3",
  "py-2",
  "border",
  "placeholder-gray-500",
  "text-gray-900",
  "focus:outline-none",
  "focus:z-10",
  "-bottom-0.5",
);
const succesClasses = classNames(
  "border-gray-300",
  "focus:ring-indigo-500",
  "focus:border-indigo-500",
);
const errorClasses = classNames("border-red-500", "focus:ring-red-500", "focus:border-red-500");

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", label, name, id, labelClasses, classes, isInvalid, ...rest }, ref) => {
    return (
      <>
        {!!label && (
          <label htmlFor={id} className={classNames(labelClasses)}>
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={classNames(baseClasses, classes, {
            [errorClasses]: isInvalid,
            [succesClasses]: !isInvalid,
          })}
          type={type}
          name={name}
          id={id}
          {...rest}
        />
      </>
    );
  },
);
