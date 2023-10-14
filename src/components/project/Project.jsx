import "./Project.css";
import Badge from "../../UIComponents/Badge";

export default function Project(props) {
  const { title, image, url, description, technologies } = props;

  const technologiesArray = technologies?.split(",");

  return (
    <div className="p">
      <a href={url} target="_blank" rel="noreferrer">
        <img src={image} alt={title} className="p-img" />

        <div className="p-info">
          <h3 className="p-title">{title}</h3>
          <p className="p-details">{description}</p>
        </div>

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
