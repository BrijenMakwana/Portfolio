import "./Skills.css";
import Skill from "../skill/Skill";
import SectionHeading from "../../UIComponents/SectionHeading";

export default function Skills(props) {
  const { heading, skills } = props;

  return (
    <div className="sl" id="skills">
      <SectionHeading title={heading} />
      <div className="sl-list">
        {skills &&
          skills.map((skill) => (
            <Skill key={skill.id} title={skill.title} image={skill.image} />
          ))}
      </div>
    </div>
  );
}
