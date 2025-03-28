"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { getAdmin, updateAdmin } from "@/services/authentication";
import { usePathname, useRouter } from "next/navigation";
import { urlSplitter } from "@/lib";

export function ProfileForm() {
  const router = useRouter();
  const pathname = usePathname();
  const lang = urlSplitter(pathname);

  const [isLoading, setIsLoading] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState<any>(null);
  const [adminDetails, setAdminDetails] = useState<any>(null);

  const fetchAdmin = async () => {
    try {
      const response = await getAdmin();
      console.log("response", response);
      if (response) {
        // setAdminDetails(response.admin);
        setFullname(response.admin.fullname);
        setEmail(response.admin.email);
      }
    } catch (error: any) {
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchAdmin();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await updateAdmin(fullname, email, password);

      if (response) {
        const data = response.data.admin;
        console.log(response);
        const updatedUserData = {
          ...data,
          fullname,
          token: "sadsa",
        };
        localStorage.setItem("userData", JSON.stringify(updatedUserData));
        toast.success(response.data.message);
        router.push(`/${lang}/admin`);
      }
    } catch (error: any) {
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center space-y-4">
              {/* <Avatar className="h-24 w-24">
                <AvatarImage src={formData.avatar} alt={formData.name} />
                <AvatarFallback>{formData.name.charAt(0)}</AvatarFallback>
              </Avatar> */}
              <Button variant="outline" size="sm" type="button">
                Change Avatar
              </Button>
            </div>

            <div className="flex-1 space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="fullname">Full Name</Label>
                <Input
                  id="fullname"
                  name="fullname"
                  value={fullname}
                  onChange={(e: any) => setFullname(e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
