import "./Skill.css";

export default function Skill(props) {
  const { title, image } = props;
  return (
    <div className="s">
      <div className="img-container">
        <img src={image} alt={title} className="s-img" />
      </div>

      <h2 className="s-title">{title}</h2>
    </div>
  );
}
