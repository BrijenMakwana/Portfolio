import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/about/About";
import AchievementList from "./components/achievementList/AchievementList";
import Introduction from "./components/introduction/Introduction";
import ProjectList from "./components/projectList/ProjectList";
import PublishedApps from "./components/publishedApps/PublishedApps";

function App() {
  const [personal, setPersonal] = useState([]);

  const getPersonalDetails = () => {
    fetch(
      "https://gzsq4ssh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22personal%22%5D"
    )
      .then((res) => res.json())
      .then((res) => {
        setPersonal(res.result[0]);
      });
  };

  useEffect(() => {
    getPersonalDetails();
  }, []);

  return (
    <div>
      <Introduction name={personal.name} />
      <About title={personal.aboutMeTitle} description={personal.AboutMeText} />
      <ProjectList
        heading={personal.projectsHeading}
        description={personal.projectsText}
      />
      <AchievementList
        heading={personal.achievementsHeading}
        description={personal.achievementsText}
      />
      <PublishedApps
        heading={personal.appsHeading}
        description={personal.appsText}
      />
    </div>
  );
}

export default App;
