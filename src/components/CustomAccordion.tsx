import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";

interface Props {
  title: string;
  description: string;
}

const CustomAccordion = ({ title, description }: Props) => {

  useEffect(() => {

    const faqElement = document.getElementById("faq-description");
    if (faqElement) {
      faqElement.style.color = "red";
    }

  }, []);

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:bg-gradient-to-l from-emerald-950 via-emerald-800 to-emerald-700 text-zinc-800 transition ease-in duration-150 px-4 dark:text-white hover:text-zinc-100 font-semibold ">
          {title}
        </AccordionTrigger>
        <AccordionContent className="px-4 pt-3">
          <div
            className="faq-description text-black dark:text-white [&_span]:text-black dark:[&_span]:!text-white"
            dangerouslySetInnerHTML={{ __html: description }}
          />


          {/* <div id="faq-description"
            className="faq-description "
            // dangerouslySetInnerHTML={{ __html: description }}
          >{description}</div> */}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CustomAccordion;
