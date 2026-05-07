"use client";
import { useState } from "react";
import AuthForm from "@/template/AuthForm";
import { useGetUserData } from "@/service/queries";
import UserAccountMenu from "./HeaderLeftMenus/UserAccountMenu";

function HeaderLeftMenu() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { data } = useGetUserData();
  if (data?.data) return <UserAccountMenu data={data} />;
  return (
    <div className="select-none">
      <span
        className="cursor-pointer md:hidden"
        onClick={() => setIsOpenModal(true)}
      >
        <img src="/svg/sign-in.svg" alt="sign in picture" />
      </span>
      <div className="px-3.5 py-1 cursor-pointer flex place-content-center gap-1.25 max-md:hidden text-[#28A745] border-3 rounded-md border-solid border-[#28A745] ">
        <div className="flex flex-row-reverse ">
          <div
            className="hover:text-green-400"
            onClick={() => setIsOpenModal(true)}
          >
            ورود
          </div>
          <img src="/svg/profile-icon.svg" alt="profile-icon" />
        </div>
        <div className="cursor-auto">|</div>
        <div
          onClick={() => setIsOpenModal(true)}
          className="hover:text-green-400"
        >
          ثبت نام
        </div>
      </div>
      <AuthForm isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </div>
  );
}

export default HeaderLeftMenu;
