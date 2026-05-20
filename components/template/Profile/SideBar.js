"use client";
import { useState } from "react";
import Link from "next/link";

import ProfileIcon from "@/icons/ProfileIcon";
import SunFogIcon from "@/icons/SunFogIcon";
import TransactionsIcon from "@/icons/TransactionsIcon";

function SideBar() {
  const [activeTab, setActiveTab] = useState(1);
  const [Color, setColor] = useState("#28A745");

  return (
    <>
      <ul className="flex  text-xs font-normal justify-between  md:flex-col md:w-71 md:h-42.5 md:text-[14px] md:border md:border-[#00000033] md:rounded-[10px] md:mt-9 md:mr-12.75  md:divide-y md:divide-[#00000033]  ">
        <Link href="/profile">
          <li
            className={`flex align-middle gap-2 px-2 py-2    md:h-14.5  md:place-items-center ${
              activeTab === 1
                ? " border-b-2 border-[#28A745]  md:border-none md:bg-[#28A74540] md:rounded-t-[10px] "
                : null
            } `}
            onClick={() => setActiveTab(1)}
          >
            <span>
              <ProfileIcon />
            </span>
            <p className={`${activeTab === 1 ? "text-[#28A745]" : null}`}>
              پروفایل من
            </p>
          </li>
        </Link>

        <Link href="/profile/my-tours">
          <li
            className={`flex align-middle gap-2 p-2  md:h-13  md:place-items-center ${
              activeTab === 2
                ? "border-b-2 border-[#28A745] md:border-none md:bg-[#28A74540] "
                : null
            } `}
            onClick={() => setActiveTab(2)}
          >
            <span>
              <SunFogIcon />
            </span>
            <p className={`${activeTab === 2 ? "text-[#28A745]" : null}`}>
              تورهای من
            </p>
          </li>
        </Link>

        <Link
          href="/profile/transactions"
          className={`${
            activeTab === 3
              ? "border-b-2 border-[#28A745] md:border-none "
              : null
          } `}
        >
          <li
            className={`flex align-middle gap-2 px-2 py-2 md:h-14.25 md:place-items-center ${
              activeTab === 3 ? "md:bg-[#28A74540] md:rounded-b-[10px] " : null
            } `}
            onClick={() => setActiveTab(3)}
          >
            <span>
              <TransactionsIcon />
            </span>
            <p className={`${activeTab === 3 ? "text-[#28A745]" : null}`}>
              تراکنش ها
            </p>
          </li>
        </Link>
      </ul>
      {/* <div className="w-full h-px bg-[#00000040] md:hidden"></div> */}
    </>
  );
}

export default SideBar;
