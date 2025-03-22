export const  BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://globalsalah.com/api"
    : "http://localhost:3000/api";
