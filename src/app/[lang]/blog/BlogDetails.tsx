"use client";

import SocialShare from "@/components/SocialShare";
import CustomAccordion from "@/components/CustomAccordion";
import { refactorDate } from "@/lib/date";
import Image from "next/image";

const BlogDetails = ({ blog }: { blog: any }) => {
  const cleanSchema = (schemaString: string) => {
    try {
      try {
        const parsedSchema = JSON.parse(schemaString);
        return parsedSchema;
      } catch {
        console.log("Schema is not valid JSON; applying transformations...");
      }

      const validSchema = schemaString
        .replace(/\s*}\s*{/g, "},{")
        .replace(/^{/, "[{")
        .replace(/}$/, "}]");

      // Step 3: Parse the transformed string
      return JSON.parse(validSchema);
    } catch (error: any) {
      console.error("Error parsing schema:", error.message);
      return null;
    }
  };
  const schema = cleanSchema(blog?.custom_schema);

  return (
    <div className="container max-w-[1100px] m-auto pt-3">
      <script
        type="application/ld+json"
        id="schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      >
        {/* {schema} */}
      </script>
      <meta property="og:title" content={blog?.blog_title} />
      <meta property="og:description" content={blog?.blog_description} />
      <meta property="og:image" content={blog?.blog_featured_image_url} />
      <meta
        property="og:url"
        content={`https://globalsalah.com/en/blog/${blog?.blog_slug}`}
      />
      <meta property="og:title" content={blog?.blog_title} />
      <meta property="og:description" content={blog?.blog_description} />
      <meta property="og:image" content={blog?.blog_featured_image_url} />
      <meta
        property="og:url"
        content={`https://globalsalah.com/en/blog/${blog?.blog_slug}`}
      />

      <h1 className="text-lg lg:text-2xl font-extrabold pt-12 text-center">
        {blog?.blog_title}
      </h1>
      <div className="flex items-center pt-16 ml-12">
        <Image
          className="rounded-full"
          src={blog?.blog_author_gravatar}
          alt="author-avatar"
          width={40}
          height={40}
          priority={true}
        />
        <div className="ml-3">
          <p className="font-bold text-sm lg:text-lg">
            {blog?.blog_author_name}
          </p>
          <p className="text-sm lg:text-md" suppressHydrationWarning>
            {refactorDate(blog?.blog_posted_date)}
          </p>
        </div>
      </div>
      <Image
        className="m-auto mt-4 rounded-lg"
        src={blog?.blog_featured_image_url}
        alt={blog?.blog_featured_image_alt}
        height={1000}
        width={1000}
        priority={true}
      />
      <div className="w-[1000px] mx-auto">
        <span
          className="mt-4  p-5 text-md font-normal text-center lg:text-left blog-description"
          dangerouslySetInnerHTML={{ __html: blog?.blog_description }}
        ></span>
      </div>
      <div className="block lg:flex items-center gap-2 mt-4">
        <p className="text-center">Tags:</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 pt-3 lg:pt-0 lg:px-3">
          {blog?.blog_tags?.map((tag: string, index: number) => (
            <span
              key={index}
              className="mr-2 text-center bg-[#f2f2f2] dark:text-black rounded-full p-2 mt-1 text-xs cursor-pointer "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="pt-16">
        {blog?.faqs?.length !== 0 && (
          <h2 className="bg-emerald-800 text-white rounded-lg text-center border-[1px] border-[#214e21] p-2 text-lg font-semibold">
            Frequently Asked Questions
          </h2>
        )}

        <div className={blog?.faqs?.length !== 0 ? "pt-8" : "pt-0"}>
          {blog?.faqs?.map((faq: any, index: number) => (
            <CustomAccordion
              key={index}
              title={faq.title}
              description={faq.description || ""}
            />
          ))}
        </div>
      </div>
      <div className="pb-20 pt-4">
        <div className="flex items-center gap-3 justify-center mt-12">
          <Image
            className="rounded-full"
            src={blog?.blog_author_gravatar}
            alt="author-avatar"
            width={50}
            height={50}
          />
          <h2 className="font-bold text-xl">
            Author: <span> {blog?.blog_author_name}</span>
          </h2>
        </div>
        <div>
          <p className="text-center w-[80%] m-auto mt-4">
            {blog?.blog_author_bio}
          </p>
        </div>
        <SocialShare
          imageUrl={blog?.blog_featured_image_alt}
          title={blog.blog_title}
          description={blog.blog_description}
        />
      </div>
    </div>
  );
};

export default BlogDetails;
