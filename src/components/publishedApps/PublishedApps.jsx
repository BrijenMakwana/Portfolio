import "./PublishedApps.css";
import AppItem from "../appItem/AppItem";
import SectionHeading from "../../UIComponents/SectionHeading";

export default function PublishedApps(props) {
  const { heading, description, apps } = props;

  return (
    <div className="pa" id="apps">
      <SectionHeading title={heading} />
      <p className="pa-desc">{description}</p>
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
