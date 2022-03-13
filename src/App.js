import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/about/About";
import AchievementList from "./components/achievementList/AchievementList";
import Introduction from "./components/introduction/Introduction";
import SkillList from "./components/skillList/SkillList";
import ProjectList from "./components/projectList/ProjectList";
import PublishedApps from "./components/publishedApps/PublishedApps";
import Footer from "./components/footer/Footer";

function App() {
  const [personal, setPersonal] = useState([]);
  const [randomColor, setRandomColor] = useState("");

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
    setRandomColor("#" + Math.floor(Math.random() * 16777215).toString(16));
  }, []);

  return (
    <div>
      <Introduction
        name={personal.name}
        position={personal.position}
        introduction={personal.introduction}
        randomColor={randomColor}
      />
      <About title={personal.aboutMeTitle} description={personal.AboutMeText} />
      <SkillList heading={personal.skillsHeading} />
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
      <Footer
        email={personal.email}
        phone={personal.phone}
        randomColor={randomColor}
      />
    </div>
  );
}

export default App;
