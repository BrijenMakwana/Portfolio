import OtherProject from "../otherProject/OtherProject";
import "./OtherProjects.css";
import SectionHeading from "../../UIComponents/SectionHeading";

export default function OtherProjects(props) {
  const { heading, description, otherProjects } = props;

  return (
    <div className="ol" id="others">
      <div className="ol-texts">
        <SectionHeading title={heading} />
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
