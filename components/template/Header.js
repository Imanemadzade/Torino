import HeaderLeftMenu from "@/module/Header/HeaderLeftMenu";
import HeaderRightMenu from "../module/Header/HeaderRightMenu";

function Header() {
  return (
    <header className="shadow-[0_1px_4px_#00000016] h-18.5  ">
      <div className="container m-auto  px-7.75 py-3.75  md:px-18.75 lg:px-31.5">
        <div className="flex items-center justify-between">
          <HeaderRightMenu />
          <HeaderLeftMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
