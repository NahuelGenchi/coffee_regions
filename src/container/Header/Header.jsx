import { SectionContainer } from "../../components";

import "./Header.scss";

const Header = () => {
  return (
    <header className="section-header">
      <SectionContainer>
        <h1>The Best Coffee Regions</h1>
        <p>Let's take a look at the countries with the highest quality of coffee beans.</p>
      </SectionContainer>
    </header>
  );
};

export default Header;