import "./SectionContainer.scss";

const SectionContainer = (props) => {
  return(
    <div className={`section-container ${props.className}`}>
      {props.children}
    </div>
  );
};

export default SectionContainer;