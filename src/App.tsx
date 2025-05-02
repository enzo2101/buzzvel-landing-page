import "./App.css";
import AllInOneSection from "./components/AllInOneSection";
import CoolFeatures from "./components/CoolFeatures";
import Header from "./components/Header";
import IconstSection from "./components/IconstSection";
import InternationalStudentsSection from "./components/InternationalStudentsSection";
import JoinWorldSection from "./components/JoinWorldSection";
import ReviewsSections from "./components/ReviewsSections";
import StudentsWorldWideSection from "./components/StudentsWorldWideSection";
import ThirdSection from "./components/ThirdSection";

function App() {
  return (
    <div className="flex flex-col gap-12">
      <Header />
      <StudentsWorldWideSection />
      <AllInOneSection />
      <ThirdSection />
      <InternationalStudentsSection />
      <IconstSection />
      <ReviewsSections />
      <CoolFeatures />
      <JoinWorldSection />
    </div>
  );
}

export default App;
