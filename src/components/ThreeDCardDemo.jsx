import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo({websiteName,websiteDis,websiteImg,websiteLink}) {
  return (
    (<CardContainer className="inter-var">
      <CardBody
        className="bg-inherit relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-[#3d3c3c] w-auto sm:w-[30vw] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-300 dark:text-white">
          {websiteName}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="max-w-sm mt-2 text-sm text-neutral-500 dark:text-neutral-300">
          {websiteDis}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={websiteImg}
            height="1000"
            width="1000"
            className="object-cover w-full opacity-[.8] h-60 rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        <div className="flex items-center justify-between mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href={websiteLink}
            target="__blank"
            className="px-4 py-2 text-xs font-normal rounded-xl dark:text-white">
            Visit now →
          </CardItem>
          {/* <CardItem
            translateZ={20}
            as="div"
            className="px-4 py-2 text-xs font-bold text-white bg-black rounded-xl dark:bg-white dark:text-black">
            Sign up
          </CardItem> */}
        </div>
      </CardBody>
    </CardContainer>)
  );
}
