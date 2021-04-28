import React, { InputHTMLAttributes } from "react";
import classNames, { TArg, TClasses } from "tailwindcss-classnames";

const inputClasses = classNames(
  "h-4",
  "w-4",
  "text-indigo-600",
  "focus:ring-indigo-500",
  "border-gray-300",
  "rounded",
);
const labelClasses = classNames("ml-2", "block", "text-sm", "text-gray-900");

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: TClasses;
  wrapperClasses?: TArg;
  label?: React.ReactNode;
  name: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, wrapperClasses, label, id, name, ...rest }, ref) => {
    return (
      <div className={classNames("inline-flex", "items-center", wrapperClasses)}>
        <input
          ref={ref}
          id={id}
          name={name}
          type="checkbox"
          className={classNames(inputClasses, className)}
          {...rest}
        />
        {!!label && (
          <label htmlFor="remember_me" className={classNames(labelClasses)}>
            {label}
          </label>
        )}
      </div>
    );
  },
);
