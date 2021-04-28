import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "tailwindcss-classnames";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { LockClosedIcon } from "@heroicons/react/solid";
import { Input, Checkbox } from "components/Form";

type LoginFormProps = {
  onSubmit?: (data: Inputs) => void;
};

type Inputs = {
  password: string;
  email: string;
  remember_me: boolean;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const submitHandler: SubmitHandler<Inputs> = (data) => {
    onSubmit?.(data);
  };

  return (
    <form className="space-y-7" onSubmit={handleSubmit(submitHandler)}>
      <div className="rounded-md shadow-sm -space-y-px pb-2 relative">
        <Input
          {...register("email")}
          label="Email address"
          id="email"
          classes={classNames("rounded-t-md")}
          labelClasses={classNames("sr-only")}
          placeholder="Email address"
          isInvalid={!!errors?.email}
        />

        <Input
          {...register("password")}
          label="Password"
          id="password"
          placeholder="Password"
          autoComplete="current-password"
          classes={classNames("rounded-b-md")}
          labelClasses={classNames("sr-only")}
          isInvalid={!!errors?.password}
        />

        {(errors?.email?.message || errors?.password?.message) && (
          <div className="mt-2 text-sm py-2 absolute">
            <p className="text-red-500">{errors?.email?.message || errors?.password?.message}</p>
          </div>
        )}
      </div>

      <Checkbox id="remember_me" label="Remember me" {...register("remember_me")} />

      <div>
        <button
          type="submit"
          className={classNames(
            "group",
            "relative",
            "w-full",
            "flex",
            "justify-center",
            "py-2",
            "px-4",
            "border",
            "border-transparent",
            "text-sm",
            "font-medium",
            "rounded-md",
            "text-white",
            "bg-black",
            "hover:bg-gray-900",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-offset-2",
            "focus:ring-indigo-500",
          )}
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <LockClosedIcon
              className="h-5 w-5 text-gray-700 group-hover:text-gray-600"
              aria-hidden="true"
            />
          </span>
          Sign in
        </button>
      </div>
    </form>
  );
};
