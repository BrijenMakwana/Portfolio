import "./Projects.css";
import Project from "../project/Project";
import SectionHeading from "../../UIComponents/SectionHeading";

export default function Projects(props) {
  const { id, heading, description, data } = props;

  return (
    <div className="pl" id={id}>
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
