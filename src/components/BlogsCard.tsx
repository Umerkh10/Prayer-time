"use client";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { urlSplitter } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  blog: any;
}
const BlogCard = ({ blog }: Props) => {
  const pathname = usePathname();
  const lang = urlSplitter(pathname)
  const short_description = `${blog?.blog_description.slice(0, 150)}...`;

  return (
    <Link href={`/${lang}/blog/${blog.blog_slug}`}>
      <Card className="cursor-pointer pb-4">
        <Image
          className="m-auto h-[399px] object-cover"
          src={blog.blog_featured_image_url}
          alt={blog.blog_featured_image_alt}
          height={400}
          width={400}
          priority={true}
        />
        <CardHeader>
          <CardTitle className="font-medium text-xl tracking-normal">
            {blog.blog_title}
          </CardTitle>
          <span
            style={{
              marginTop: "1rem",
              letterSpacing: 0,
            }}
            dangerouslySetInnerHTML={{ __html: short_description }}
          />
        </CardHeader>
        <CardFooter className="bg-emerald-600 shadow-sm shadow-black hover:bg-emerald-700 transition-all duration-200 w-fit rounded-md m-auto text-white px-3 py-2 text-center flex items-center hover:scale-110">
          <span>Read More</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
