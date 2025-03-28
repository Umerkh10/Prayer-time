import BlogsBanner from "./BlogsBanner";
import BlogCard from "@/components/BlogsCard";
import CustomSkeleton from "@/components/ui/CustomSkeleton";
import { getAllBlogs } from "@/services/blog";

const Blogs = async () => {

  const blogs = await getAllBlogs();

  return (
    <div>
      <BlogsBanner />
      {blogs?.length === 0 ? (
        <CustomSkeleton />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-14 py-6 mt-4 gap-4">
          {blogs?.map((blog: any) => (
            <div key={blog.blog_id}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
