import React from "react";
import cn from "classnames";
import { Container } from "./Container";

type HeaderProps = {
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ className, children }) => {
  return (
    <header className={cn("bg-white shadow", className)}>
      <Container className="py-6">
        <h1 className="text-3xl font-bold text-gray-900">{children}</h1>
      </Container>
    </header>
  );
};
