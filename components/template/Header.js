import HamburgerMenu from "@/module/header/HamburgerMenu";
import MobileMenu from "@/module/header/MobileMenu";

function Header() {
  return (
    <header className="shadow-[0_1px_4px_#00000016] h-18.5  ">
      <div className="container m-auto  px-2.5 py-3.75 md:px-18.75">
        <div className="flex items-center justify-between">
          <HamburgerMenu />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
