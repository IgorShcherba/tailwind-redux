import classNames from "classnames";

type BadgeType = {
  className?: string;
};

export const Badge: React.FC<BadgeType> = ({ children, className }) => {
  return (
    <span
      className={classNames(
        "px-2 inline-flex text-xs leading-5 rounded-full bg-yellow-100 text-green-800",
        className
      )}
    >
      {children}
    </span>
  );
};
