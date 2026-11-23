import avatar from "/assets/images/avatar.webp";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
}

const Avatar = ({
  src = avatar,
  alt = "User avatar",
  size = "md",
}: AvatarProps) => {
  const sizes = {
    sm: "size-8",
    md: "size-10",
    lg: "size-12",
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`${sizes[size]} rounded-full border border-stellify-border object-cover`}
    />
  );
};

export default Avatar;
