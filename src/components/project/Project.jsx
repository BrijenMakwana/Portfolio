import "./Project.css";
import Badge from "../../UIComponents/Badge";

export default function Project(props) {
  const { title, image, url, description, technologies } = props;

  const technologiesArray = technologies?.split(",");

  const randomColors = [
    "#5C8374",
    "#A78295",
    "#8CABFF",
    "#03C988",
    "#FAF4B7",
    "#B0578D",
  ];

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
