import "./LinkButton.css";

export default function LinkButton(props) {
  const { text, link } = props;
  return (
    <a className="linkbtn-text" href={link} target="blank">
      {text}
    </a>
  );
}
