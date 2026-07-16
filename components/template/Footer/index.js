import FooterLinks from "./FooterLinks";
import FooterBrands from "./FooterBrands";
import Container from "components/layout/Container";

function Footer() {
  return (
    <footer>
      <Container>
        <div className="pt-6 flex flex-col  border-dashed border-t-[1.5px] border-t-[#0000002d] md:flex-row md:justify-between md:border-solid">
          <FooterLinks />
          <FooterBrands />
        </div>
      </Container>
      <div className="mt-2  mx-7.75  sm:mx-14 md:mx-20 lg:mx-0 py-2 text-[12px] font-light text-center border-t border-t-[#00000040]">
        کلیه حقوق این وب سایت متعلق به تورینو میباشد.
      </div>
    </footer>
  );
}

export default Footer;
