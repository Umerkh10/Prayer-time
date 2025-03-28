const BASE_URL =
  "https://blogs.globalsalah.com/wp-json/custom-blog-api/v1";

const TOKEN =
  "347f7627d6c4765cf911391a34a3319e2140859fbc723ebefeb4f2f39d8a1d67";

export const getAllBlogs = async () => {
  const response = await fetch(`${BASE_URL}/blogs`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }
  return response.json();
};

export const getBlogBySlug = async (slug: any) => {
  const response = await fetch(`${BASE_URL}/blog/${slug}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }
  return response.json();
};
