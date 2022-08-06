import "./SectionContainer.scss";

const SectionContainer = (props) => {
  return(
    <div className="section-container">
      {props.children}
    </div>
  );
};

export default SectionContainer;