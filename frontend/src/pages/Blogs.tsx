import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  const content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex excepturi repudiandae quos dicta nam facilis adipisci optio ad ullam, placeat libero nulla doloribus et rerum, quibusdam sed delectus voluptates veniam? A magnam laboriosam labore error dicta tenetur nemo? Numquam quam a tempore fuga voluptatem ducimus deleniti porro assumenda! Error temporibus explicabo iure ut expedita. Reprehenderit est voluptatibus minus consectetur placeat quam dolore omnis, ea aut modi? Error quos, molestias dolorem nesciunt iure odit delectus nulla nobis nisi libero ipsam. Ad nemo, cumque fugiat dolor blanditiis eius, voluptate expedita quidem cum sequi quasi consequuntur magnam praesentium corrupti repudiandae, voluptatem excepturi. Enim aperiam nulla laborum, ipsum omnis tenetur totam corporis cumque est libero, cupiditate quisquam? Veritatis quas a repellat laboriosam cum dicta impedit qui unde fugiat, adipisci consectetur nesciunt tempora voluptatum architecto dolore. Omnis quam asperiores ullam delectus quasi adipisci aliquid iure!";

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          <BlogCard
            authorName="Rakesh"
            title="How an ugly single page website makes $5000 a month without affiliate marketing"
            content={content}
            publishDate="9th Oct 2024"
          />
          <BlogCard
            authorName="Rakesh"
            title="How an ugly single page website makes $5000 a month without affiliate marketing"
            content={content}
            publishDate="9th Oct 2024"
          />
          <BlogCard
            authorName="Rakesh"
            title="How an ugly single page website makes $5000 a month without affiliate marketing"
            content={content}
            publishDate="9th Oct 2024"
          />
          <BlogCard
            authorName="Rakesh"
            title="How an ugly single page website makes $5000 a month without affiliate marketing"
            content={content}
            publishDate="9th Oct 2024"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
