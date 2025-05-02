import "./App.css";
import AllInOneSection from "./components/AllInOneSection";
import Header from "./components/Header";
import InternationalStudentsSection from "./components/InternationalStudentsSection";
import StudentsWorldWideSection from "./components/StudentsWorldWideSection";
import ThirdSection from "./components/ThirdSection";

function App() {
  return (
    <div className="flex flex-col px-4 gap-12">
      <Header />
      <StudentsWorldWideSection />
      <AllInOneSection />
      <ThirdSection />
      <InternationalStudentsSection />
    </div>
  );
}

export default App;
