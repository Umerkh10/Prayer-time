"use client"
import React, { useEffect, useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from "framer-motion"
import { Loader2, Loader2Icon } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner';
import EmailAction2 from '@/app/(backend)/contact-form/emailaction2'
import CustomCaptcha from '@/components/ui/common/CustomCaptcha'
import Link from 'next/link'


interface ContactPageProps {
  lang: string;
}

function ContactPage({ lang }: ContactPageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation("contact");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isVerified) {
      toast.error("Please Verify the Captcha");
      return;
    }

    setPending(true);

    // Convert form data to FormData object
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('lang', lang); // ✅ Include lang in form data

    try {
      // Send the FormData to the EmailAction2 function
      const result = await EmailAction2(null, formData);
      console.log("rewrwer",result);
      

      // Check for success or error in the response
      if (result.success) {
        router.push(`/${lang}/thank-you-for-contact`); // ✅ Redirect with language parameter
      } else {
        console.error(result.error);
        toast.error("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      toast.error("Something went wrong.");
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("loading", "true");
    setIsLoading(true);

    const timer = setTimeout(() => {
      localStorage.setItem("loading", "false");
      setIsLoading(false); // This will now execute AFTER 2 seconds
    }, 800);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);



  return (
    <>
      {isLoading ? <div className='px-8 mt-4'>
        <Skeleton className="h-80 w-full" />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mt-4'>
          <Skeleton className="h-screen w-full" />
          <Skeleton className="h-screen w-full" />
        </div>
      </div> :
        (<div>
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="py-20 text-center bg-[#FAFAFF] dark:bg-[#000000] supports-[backdrop-filter]:bg-[#003524]  text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("contact.title")}</h1>
            <p className="text-xl max-w-2xl mx-auto">{t("contact.desc")}</p>
          </motion.section>

          <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">

            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-bold mb-6 text-green-600">{t("contact.formtitle")}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 pl-2">
                    {t("contact.formname")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t("contact.nameplaceholder")}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-lg py-2 px-3  shadow-lg "
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium  mb-2 pl-2">
                    {t("contact.formemail")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("contact.emailplaceholder")}
                    required
                    className="mt-1 block w-full rounded-lg py-2 px-3 shadow-lg "
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium  mb-2 pl-2">
                    {t("contact.formmessage")}
                  </label>
                  <textarea
                    placeholder={t("contact.messageplaceholder")}
                    id="message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-lg py-2 px-3 shadow-lg  "
                  ></textarea>
                </div>
                <div>
                  <CustomCaptcha  setIsVerified={setIsVerified} />
                  <button type="submit" disabled={pending} className="w-full flex justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-lg text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    {pending ? (
                      <>
                        <Loader2Icon className="animate-spin mr-2 h-5 w-5" />{" "}
                        <p>Submitting...</p>
                      </>
                    ) : (
                      <>{t("contact.formbutton")}</>
                    )}
                  </button>
        
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold mb-6 text-green-600">{t("contact.infotitle")}</h2>

              {/* <div className="flex items-start space-x-3">
                <FaPhone className="text-green-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold">{t("contact.infophone")}</h3>
                  <p className="">+1 (555) 123-4567</p>
                </div>
              </div> */}
              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-green-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold">{t("contact.formemail")}</h3>
                  <Link href={'mailto:support@globalsalah.com'} className="">support@globalsalah.com</Link>
                </div>
              </div>

            </motion.div>
          </div>


        </div>)}
    </>
  )
}

export default ContactPage