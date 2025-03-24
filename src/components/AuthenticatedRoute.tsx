import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { urlSplitter } from "@/lib";

const AuthenticatedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  const lang = urlSplitter(pathname);

  useEffect(() => {
    const user = localStorage.getItem("userData");
    const parsedUser = user ? JSON.parse(user) : null;

    if (parsedUser?.role !== "admin") {
      router.push(`/${lang}/forum`);
    }
  }, [router, pathname]);

  return <>{children}</>;
};

export default AuthenticatedRoute;
