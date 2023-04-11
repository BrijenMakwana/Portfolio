import "./Skills.css";
import Skill from "../skill/Skill";
import color from "../../colors/color";

export default function Skills(props) {
  const { heading, skills } = props;

  return (
    <div className="sl" id="skills">
      <div className="sl-texts">
        <h1 className="sl-title" style={{ color: color.primary }}>
          {heading}
        </h1>
      </div>
      <div className="sl-list">
        {skills &&
          skills.map((skill) => (
            <Skill key={skill.id} title={skill.title} image={skill.image} />
          ))}
      </div>
    </div>
  );
}
