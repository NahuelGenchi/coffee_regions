import { roastData } from "../../mock/api";

import "./Roast.scss";

const Roast = () => {
  console.log(roastData);

  return(
    <>
      {
        roastData.map((item) => {
          return (
            <div key={item.id} className="roast-container" style={{backgroundColor: `${item.bgcolor}`}}>
              <h4>{item.title}</h4>
              <h5>{item.temperature}</h5>
              <p>{item.description}</p>
            </div>
          )
        })
      }
    </>
  );
};

export default Roast;