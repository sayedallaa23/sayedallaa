import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram ,FaSquareGithub,FaSquareWhatsapp } from "react-icons/fa6";
function Socials() {
  return (
    <div className="flex gap-2">
      <a href="https://www.facebook.com/sayed.allaa/" target="_blank">
        <FaSquareFacebook className="text-[50px] text-[#adadad]" />
      </a>
      <a href="https://www.instagram.com/sayed_allaa/" target="_blank">
      <FaSquareInstagram  className="text-[50px] text-[#adadad]" />
      </a>
      <a href="https://github.com/sayedallaa23" target="_blank">
      <FaSquareGithub  className="text-[50px] text-[#adadad]" />
      </a>
      <a href="https://wa.me/201009847506" target="_blank">
      <FaSquareWhatsapp  className="text-[50px] text-[#adadad]"  />
      </a>
    </div>
  );
}

export { Socials as default }