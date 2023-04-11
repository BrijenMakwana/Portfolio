import OtherProject from "../otherProject/OtherProject";
import "./OtherProjects.css";
import color from "../../colors/color";

export default function OtherProjects(props) {
  const { heading, description, otherProjects } = props;

  return (
    <div className="ol" id="others">
      <div className="ol-texts">
        <h1 className="ol-title" style={{ color: color.primary }}>
          {heading}
        </h1>
        <p className="ol-desc">{description}</p>
      </div>
      <div className="ol-list">
        {otherProjects &&
          otherProjects.map((project) => (
            <OtherProject
              key={project.id}
              title={project.title}
              image={project.image}
              url={project.url}
              description={project.description}
              type={project.type}
            />
          ))}
      </div>
    </div>
  );
}
