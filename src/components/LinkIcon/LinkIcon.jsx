import "./LinkIcon.scss";

const LinkIcon = (props) => {
  return (
    <a className="link-icon" href={props.link} target="_blank" rel="noreferrer">
      <ion-icon name={props.icon}></ion-icon>
    </a>
  );
};

export default LinkIcon;