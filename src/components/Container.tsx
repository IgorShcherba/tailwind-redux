import React from "react";
import cn from "classnames";

type ContainerProps = {
  className?: string;
  [x: string]: any;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
};
