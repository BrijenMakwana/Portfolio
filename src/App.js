import { useEffect, useState } from "react";
import About from "./components/about/About";
import Introduction from "./components/introduction/Introduction";
import PublishedApps from "./components/publishedApps/PublishedApps";
import Footer from "./components/footer/Footer";
import Fab from "./components/fab/Fab";
import Navbar from "./components/navbar/Navbar";
import apiRequest from "./api/api";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Articles from "./components/articles/Articles";
import OtherProjects from "./components/otherProjects/OtherProjects";

function App() {
  const [portfolio, setPortfolio] = useState([]);
  const [fabIsOpen, setFabIsOpen] = useState(false);

  const getPortfolio = () => {
    fetch(apiRequest)
      .then((res) => res.json())
      .then((data) => {
        setPortfolio(data.result[0]);
      });
  };

  useEffect(() => {
    getPortfolio();
  }, []);

  return (
    <>
      <Navbar fabIsOpen={fabIsOpen} setFabIsOpen={setFabIsOpen} />
      <Fab setFabIsOpen={setFabIsOpen} fabIsOpen={fabIsOpen} />
      <Introduction
        name={portfolio.name}
        roles={portfolio.roles}
        introduction={portfolio.introduction}
      />
      <About about={portfolio.about} />
      <Skills heading={portfolio.skillsHeading} skills={portfolio.skills} />
      <Projects
        heading={portfolio.projectsHeading}
        description={portfolio.projectsDescription}
        data={portfolio.projects}
      />
      <Projects
        heading={portfolio.achievementsHeading}
        description={portfolio.achievementsDescription}
        data={portfolio.achievements}
      />
      <Articles
        heading={portfolio.articlesHeading}
        description={portfolio.articlesDescription}
        links={portfolio.links}
      />
      <PublishedApps
        heading={portfolio.appsHeading}
        description={portfolio.appsDescription}
        apps={portfolio.apps}
      />
      <OtherProjects
        heading={portfolio.otherProjectsHeading}
        description={portfolio.otherProjectsDescription}
        otherProjects={portfolio.otherProjects}
      />
      <Footer email={portfolio.email} phone={portfolio.phone} />
    </>
  );
}

export default App;
