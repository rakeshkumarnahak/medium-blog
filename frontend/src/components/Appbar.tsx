import Avatar from "./Avatar";

const Appbar = () => {
  return (
    <div className="flex justify-between px-20 py-4 border-b shadow-sm">
      <p className="text-2xl font-medium ">Medium</p>
      <Avatar authorName="Rakesh" size="big" />
    </div>
  );
};

export default Appbar;
