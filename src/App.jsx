import Switch from "./components/Switch";
import BackgroundSection from "./sections/BackgroundSection";
import MainSection from "./sections/MainSection";
import VideoSection from "./sections/VideoSection";
import SkillsSection from "./sections/SkillsSection";

function App() {
  return (
    <>
      <Switch />
      <div className="container flex flex-col mx-auto py-50 px-30 space-y-[100px]">
        <MainSection />
        <VideoSection />
        <hr className="h-1 text-accent" />
        <BackgroundSection />
        <hr className="h-1 text-accent" />
        <SkillsSection />
      </div>
    </>
  );
}

export default App;
