import classNames from "classnames";

type AvatarProps = {
  src: string;
  className?: string;
  alt?: string;
};

export const Avatar: React.FC<AvatarProps> = ({ src, className, alt = "" }) => {
  return (
    <div className={classNames("h-10 w-10", className)}>
      <img
        className="h-10 w-10 rounded-full object-cover"
        src={src}
        alt={alt}
      />
    </div>
  );
};
