import HeaderLeftMenu from "@/module/Header/HeaderLeftMenu";
import HeaderRightMenu from "../module/Header/HeaderRightMenu";
import Container from "components/layout/Container";

function Header() {
  return (
    <header className="shadow-[0_1px_4px_#00000016] h-18.5  ">
      <Container className="py-3.5">
        <div className="flex items-center justify-between">
          <HeaderRightMenu />
          <HeaderLeftMenu />
        </div>
      </Container>
    </header>
  );
}

export default Header;
