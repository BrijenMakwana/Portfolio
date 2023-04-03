import { useEffect, useState } from "react";
import About from "./components/about/About";
import AchievementList from "./components/achievementList/AchievementList";
import Introduction from "./components/introduction/Introduction";
import SkillList from "./components/skillList/SkillList";
import ProjectList from "./components/projectList/ProjectList";
import PublishedApps from "./components/publishedApps/PublishedApps";
import Footer from "./components/footer/Footer";
import Others from "./components/others/Others";
import { ArticleList } from "./components/articleList/ArticleList";
import Fab from "./components/fab/Fab";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [personal, setPersonal] = useState([]);
  const [fabOpen, setFabOpen] = useState(false);

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
    <>
      <Navbar fabOpen={fabOpen} setFabOpen={setFabOpen} />
      <Fab setFabOpen={setFabOpen} fabOpen={fabOpen} />
      <Introduction
        name={personal.name}
        position={personal.position}
        introduction={personal.introduction}
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
      <ArticleList
        heading={personal.articlesHeading}
        description={personal.articlesText}
      />
      <PublishedApps
        heading={personal.appsHeading}
        description={personal.appsText}
      />
      <Others
        heading={personal.othersHeading}
        description={personal.othersText}
      />
      <Footer email={personal.email} phone={personal.phone} />
    </>
  );
}

export default App;
