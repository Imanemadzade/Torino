import Link from "next/link";

function SideBar() {
  return (
    <div>
      <ul className="flex     text-xs font-normal justify-around md:flex-col md:w-71 md:h-42 md:text-[14px] md:border md:border-[#00000033] md:rounded-[10px] md:mt-9 md:mr-31.5 md:divide-y md:divide-[#00000033]  ">
        <li className="flex align-middle gap-2 py-2 md:h-14.75  md:place-items-center   ">
          <img
            src="/svg/profile-black.svg"
            className="w-4 h-4 md:w-5 md:h-5 md:mr-3"
          />
          <Link href="/profile">پروفایل من</Link>
        </li>
        <li className="flex align-middle gap-2 py-2  md:h-13.25 md:align-middle md:place-items-center  ">
          <img
            src="/svg/sun-fog-profile.svg"
            className="w-4 h-4 md:w-5 md:h-5 md:mr-3"
          />
          <Link href="/profile/my-tours">تورهای من</Link>
        </li>
        <li className="flex  gap-2 py-2 md:h-13.75 md:place-items-center ">
          <img
            src="/svg/convert-card-profile.svg"
            className="w-4 h-4 md:w-5 md:h-5 md:mr-3 "
          />
          <Link href="/profile/transactions">تراکنش ها</Link>
        </li>
      </ul>
      <div className="w-full h-px bg-[#00000040] md:hidden"></div>
    </div>
  );
}

export default SideBar;
