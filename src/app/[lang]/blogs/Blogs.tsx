import BlogsBanner from "./BlogsBanner";
import BlogCard from "@/components/BlogsCard";
import CustomSkeleton from "@/components/ui/CustomSkeleton";
import { getAllBlogs } from "@/services/blog";

interface BlogsProps {
  lang: string;
}

const Blogs = async ({ lang }: BlogsProps) => {
  const blogs = await getAllBlogs();

  const filteredBlogs = blogs?.filter((blog: any) => blog.lang === lang);

  return (
    <div>
      <BlogsBanner />
      {filteredBlogs?.length === 0 ? (
        <CustomSkeleton />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-14 py-6 mt-4 gap-4">
          {filteredBlogs.map((blog: any) => (
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
