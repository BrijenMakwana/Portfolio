import Achievement from "../achievement/Achievement";
import "./Achievements.css";
import color from "../../colors/color";

export default function Achievements(props) {
  const { heading, description, achievements } = props;

  return (
    <div className="al" id="achievements">
      <div className="al-texts">
        <h1 className="al-title" style={{ color: color.primary }}>
          {heading}
        </h1>
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
