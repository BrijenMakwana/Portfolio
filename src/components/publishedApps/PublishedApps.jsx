import "./PublishedApps.css";
import AppItem from "../appItem/AppItem";
import color from "../../colors/color";

export default function PublishedApps(props) {
  const { heading, description, apps } = props;

  return (
    <div className="pa" id="apps">
      <div className="pa-texts">
        <h1 className="pa-title" style={{ color: color.primary }}>
          {heading}
        </h1>
        <p className="pa-desc">{description}</p>
      </div>
      <div className="pa-list">
        {apps &&
          apps.map((app) => (
            <AppItem
              key={app.id}
              title={app.title}
              image={app.image}
              url={app.url}
            />
          ))}
      </div>
    </div>
  );
}
