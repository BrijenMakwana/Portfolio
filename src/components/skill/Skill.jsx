import "./Skill.css";

export default function Skill(props) {
  const { title, image } = props;
  return (
    <div className="s">
      <img src={image} alt={title} className="s-img" />
      <div className="s-info">
        <h2 className="s-title">{title}</h2>
      </div>
    </div>
  );
}
