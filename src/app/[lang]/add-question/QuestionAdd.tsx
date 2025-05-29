"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Loader2, Send, HelpCircle, Info } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { urlSplitter } from "@/lib";
import { addQuestion } from "@/services/forum";
import { toast } from "sonner";
import CustomCaptcha from "@/components/ui/common/CustomCaptcha";
import { useTranslation } from "@/hooks/useTranslation";
import { Skeleton } from "@/components/ui/skeleton";

export default function AddQuestionPage() {
  const router = useRouter();
  const pathname = usePathname();
  const lang = urlSplitter(pathname);
  const { t } = useTranslation("forum")
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userDetailsInLS, setUserDetailsInLS] = useState<any>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [titleCount, setTitleCount] = useState(0);
  const MAX_TITLE_LENGTH = 100;

  useEffect(() => {
    const user: any = localStorage.getItem("userData");
    const parsedUser = JSON.parse(user);
    setUserDetailsInLS(parsedUser);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "title") {
      // Limit title to MAX_TITLE_LENGTH characters
      if (value.length <= MAX_TITLE_LENGTH) {
        setTitle(value);
        setTitleCount(value.length);
      }
    } else if (name === "content") {
      setDescription(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) {
      toast.error("Please Verify the Captcha");
      return;
    }
    setIsLoading(true);

    const questionDetail = { user_id: userDetailsInLS?.id, title, description, lang };

    try {
      const response = await addQuestion(questionDetail);

      if (response.status === 201) {
        router.push(`/${lang}/question-submitted`);
      }
    } catch (error: any) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("loading", "true");
    setIsLoading(true);

    const timer = setTimeout(() => {
      localStorage.setItem("loading", "false");
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? <div className='px-8 mt-4'>
        <div className='flex items-center justify-center gap-2 mt-4'>
          <Skeleton className="h-[500px] rounded-lg w-3/5" />
        </div>
      </div> :
        (<div className="container max-w-3xl mx-auto py-8 px-4">
          <Link href={`/${lang}/forum`}>
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("forum.returnforum")}
            </Button>
          </Link>

          <Card className="border-primary/20 shadow-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-emerald-600" />
                {t("forum.askquestion")}
              </CardTitle>
              <CardDescription>
                {t("forum.sharequestion")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="title"> {t("forum.questiontitle")} </Label>
                    <span
                      className={`text-xs ${titleCount > MAX_TITLE_LENGTH * 0.8
                        ? "text-orange-500"
                        : "text-muted-foreground"
                        }`}
                    >
                      {titleCount}/{MAX_TITLE_LENGTH}
                    </span>
                  </div>
                  <Input
                    id="title"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    placeholder={t("forum.questiontitleplaceholder")}
                    className="border-primary/20 focus-visible:ring-primary/30"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    {t("forum.addquestionlabel")}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">{t("forum.questiondetails")}</Label>
                  <Textarea
                    id="content"
                    name="content"
                    value={description}
                    onChange={handleChange}
                    placeholder={t("forum.addquestionplaceholder")}
                    className="min-h-[200px] border-primary/20 focus-visible:ring-primary/30"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    {t("forum.addquestiondesc")}
                  </p>
                </div>

                <Alert className="bg-muted/50 border-primary/20">
                  <Info className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    {t("forum.addquestiondesc2")}
                  </AlertDescription>
                </Alert>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between border-t p-6">
              <Button
                variant="outline"
                onClick={() => router.push(`/${lang}/forum`)}
                className="border-primary/20"
              >
                {t("forum.cancel")}
              </Button>
              <CustomCaptcha setIsVerified={setIsVerified} />

              <Button
                onClick={handleSubmit}
                disabled={isLoading}
                className="gap-2 bg-emerald-600 hover:bg-emerald-800 text-white"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t("forum.submit")}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {t("forum.submitquestion")}
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>)}
    </>
  )
}