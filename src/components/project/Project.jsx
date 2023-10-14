import "./Project.css";
import Badge from "../../UIComponents/Badge";

export default function Project(props) {
  const { title, image, url, description, technologies } = props;

  const technologiesArray = technologies?.split(",");

  const randomColors = ["#1fa095", "#E34530", "#F2F24C", "#FFC82A", "#8FA9EA"];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * randomColors.length);
    return randomColors[randomIndex];
  };

  return (
    <div className="p" style={{ backgroundColor: getRandomColor() }}>
      <a href={url} target="_blank" rel="noreferrer">
        <img src={image} alt={title} className="p-img" />

        <h3 className="p-title">{title}</h3>
        <p className="p-details">{description}</p>

        {technologies && (
          <div className="project-technologies-container">
            {technologiesArray.map((tech, index) => (
              <Badge key={index} title={tech} />
            ))}
          </div>
        )}
      </a>
    </div>
  );
}
