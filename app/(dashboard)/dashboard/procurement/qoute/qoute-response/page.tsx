/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-lone-blocks */

"use client";


import { CustomTabItem } from "@/app/_components/molecules/m-custom-tab";
import QuoteResponseFile from "@/app/_components/organisms/o-qoute-file-component";
import QuoteResponseFinalReview from "@/app/_components/organisms/o-qoute-final-review-component";
import QuoteInitialResponse from "@/app/_components/organisms/o-qoute-intial-component";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState } from "react";

export default function QouteResponsePage() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleChangePage = () => {
      setSelectedIndex((prev)=> prev + 1);
    };
  return (
    <div className="flex flex-col space-y-6 mt-[2rem]">
      <div className="flex items-center space-x-2">
        <p className="text-sm font-thin text-primaryBlueColor">Quotes </p>
        <p className=" text-sm font-thin text-[#667185]">/ Quote Response</p>
      </div>
      <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <TabList className="border rounded-[10px] py-6 px-[20px] flex items-center space-x-[10rem] 2xl:space-x-[14rem] ">
          <CustomTabItem
            index={0}
            selectedIndex={selectedIndex}
            label="Request Information"
            description="Provide details about the RFQ"
          />
          <CustomTabItem
            index={1}
            selectedIndex={selectedIndex}
            label="Terms and Attachments"
            description="Payment and delivery terms"
          />
          <CustomTabItem
            index={2}
            selectedIndex={selectedIndex}
            label="Review"
            description="Confirm all information provided"
          />
        </TabList>
        <TabPanels>
          <TabPanel>
            <QuoteInitialResponse handleChangePage={handleChangePage} />
          </TabPanel>
          <TabPanel>
            <QuoteResponseFile handleChangePage={handleChangePage} />
          </TabPanel>
          <TabPanel>
            <QuoteResponseFinalReview handleChangePage={handleChangePage} />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}