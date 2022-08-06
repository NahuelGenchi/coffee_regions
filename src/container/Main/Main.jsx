import { SectionContainer } from "../../components";

import "./Main.scss";

const Main = () => {
  return(
    <main className="section-main">
      <SectionContainer className="section-roasting">
        <div className="sr-top">
          <h3>A Note on Roasting</h3>
          <p>Roasting coffee transforms the chemical and physical properties of raw coffee beans into roasted coffee products. This process is what produces the characteristic flavor of coffee by causing the green coffee beans to change in taste. Many coffee roasters determine the level of roast by eye, assessing the color of the beans to determine the desired roast-level.</p>
        </div>
        <div className="sr-bottom"></div>
      </SectionContainer>
    </main>
  );
};

export default Main;