import Achievement from "../achievement/Achievement";
import "./Achievements.css";
import SectionHeading from "../../UIComponents/SectionHeading";

export default function Achievements(props) {
  const { heading, description, achievements } = props;

  return (
    <div className="al" id="achievements">
      <div className="al-texts">
        <SectionHeading title={heading} />
        <p className="al-desc">{description}</p>
      </div>
      <div className="al-list">
        {achievements &&
          achievements.map((achievement) => (
            <Achievement
              key={achievement.id}
              title={achievement.title}
              image={achievement.image}
              url={achievement.url}
              description={achievement.description}
            />
          ))}
      </div>
    </div>
  );
}
