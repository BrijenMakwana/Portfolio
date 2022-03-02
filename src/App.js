import "./App.css";
import About from "./components/about/About";
import AchievementList from "./components/achievementList/AchievementList";
import Introduction from "./components/introduction/Introduction";
import ProjectList from "./components/projectList/ProjectList";

function App() {
  return (
    <div>
      <Introduction />
      <About />
      <ProjectList />
      <AchievementList />
    </div>
  );
}

export default App;
