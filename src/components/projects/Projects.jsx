import "./Projects.css";
import Project from "../project/Project";
import SectionHeading from "../../UIComponents/SectionHeading";

export default function Projects(props) {
  const { heading, description, projects } = props;

  return (
    <div className="pl" id="projects">
      <div className="pl-texts">
        <SectionHeading title={heading} />
        <p className="pl-desc">{description}</p>
      </div>
      <div className="pl-list">
        {projects &&
          projects.map((project) => <Project key={project.id} {...project} />)}
      </div>
    </div>
  );
}
