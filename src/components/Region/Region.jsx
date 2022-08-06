import { regionsData } from "../../mock/api";

import "./Region.scss";

const Region = () => {
  return(
    <>
      {
        regionsData.map((region) => {
          return(
            <div key={region.id} className="region-container">
              <h2>{region.title}</h2>
              <p>{region.description}</p>
              <a href={region.link} target="_blank" rel="noreferrer">Learn more about {region.title}</a>
            </div>
          )
        })
      }
    </>
  );
};

export default Region;