import "./Projects.css";
import Project from "../project/Project";
import color from "../../colors/color";

export default function Projects(props) {
  const { heading, description, projects } = props;

  return (
    <div className="pl" id="projects">
      <div className="pl-texts">
        <h1 className="pl-title" style={{ color: color.primary }}>
          {heading}
        </h1>
        <p className="pl-desc">{description}</p>
      </div>
      <div className="pl-list">
        {projects &&
          projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              image={project.image}
              url={project.url}
              description={project.description}
            />
          ))}
      </div>
    </div>
  );
}
