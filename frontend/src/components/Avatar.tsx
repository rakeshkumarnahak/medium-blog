const Avatar = ({
  authorName,
  size = "small",
}: {
  authorName: string;
  size?: "small" | "big";
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size == "small" ? "w-6 h-6" : "w-8 h-8"
      } overflow-hidden bg-gray-500 rounded-full`}
    >
      <span
        className={`${
          size == "small" ? "text-sm" : "text-xl"
        } font-medium text-white `}
      >
        {authorName[0]}
      </span>
    </div>
  );
};

export default Avatar;
