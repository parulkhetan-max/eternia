import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title: string
  faqs: FAQItem[]
}

export function FAQSection({ title, faqs }: FAQSectionProps) {
  return (
    <div className="pt-[50px] pb-[25px] sm:py-24 bg-[var(--color-green)]">
      <div className="container-flex">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="mb-6 text-white">
            {title}
          </h2>
          <hr className="border-white mb-4 w-[40%] mx-auto" />
        </div>

        {/* FAQ Accordion */}
        <div className="">
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-white/20"
              >
                <AccordionTrigger className="text-white py-4 px-0">
                  <span className="text-left text-base md:text-lg font-medium">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-white/80 px-0">
                  <p className="text-sm md:text-base">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
