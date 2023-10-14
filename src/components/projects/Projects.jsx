import "./Projects.css";
import Project from "../project/Project";
import SectionHeading from "../../UIComponents/SectionHeading";

export default function Projects(props) {
  const { heading, description, data } = props;

  return (
    <div className="pl" id="projects">
      <div className="pl-texts">
        <SectionHeading title={heading} />
        <p className="pl-desc">{description}</p>
      </div>
      <div className="pl-list">
        {data &&
          data.map((project) => <Project key={project.id} {...project} />)}
      </div>
    </div>
  );
}
