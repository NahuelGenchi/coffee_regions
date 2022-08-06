import { SectionContainer, LinkIcon } from "../../components";

import "./Footer.scss";

const Footer = () => {
  return(
    <footer className="section-footer">
      <SectionContainer>
        <div className="sf-info">
          <span>© Coffee Regions</span>
          <span>Nahuel Genchi</span>
        </div>
        <div className="sf-contact">
          <LinkIcon link="https://www.linkedin.com/in/nahuel-genchi" icon="logo-linkedin"/>
          <LinkIcon link="https://github.com/NahuelGenchi" icon="logo-github"/>
          <a href="mailto:nahuelgenchi@gmail.com" className="sf-contact-mail">nahuelgenchi@gmail.com</a>
        </div>
      </SectionContainer>
    </footer>
  );
};

export default Footer;