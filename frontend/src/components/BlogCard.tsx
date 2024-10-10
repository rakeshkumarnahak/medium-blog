import Avatar from "./Avatar";

interface BlogProps {
  authorName: string;
  title: string;
  content: string;
  publishDate: string;
}

const BlogCard = ({ authorName, title, content, publishDate }: BlogProps) => {
  return (
    <div className="flex justify-center max-w-2xl shadow-sm border-b border-gray-150 pb-4">
      <div className="p-4">
        <div className="flex">
          <Avatar authorName={authorName} />
          <div className="pl-2 text-sm font-extralight flex justify-center flex-col">
            {authorName}
          </div>
          <div className="flex justify-center flex-col pl-2">
            <Circle />
          </div>
          <div className="pl-2 text-sm font-thin text-slate-500 flex justify-center flex-col">
            {publishDate}
          </div>
        </div>
        <div className="font-bold text-2xl pt-2">{title}</div>
        <div className=" text-md font-thin">{`${content.slice(
          0,
          150
        )}...`}</div>
        <div className="font-normal text-gray-400 text-sm pt-2">{`${Math.ceil(
          content.length / 1000
        )} min read`}</div>
      </div>
    </div>
  );
};

export default BlogCard;

const Circle = () => {
  return <div className="bg-slate-500 h-1 w-1 rounded-full"></div>;
};
