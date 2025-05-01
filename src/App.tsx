import "./App.css";
import Header from "./components/Header";
import StudentsWorldWideSection from "./components/StudentsWorldWideSection";

function App() {
  return (
    <div className="flex flex-col px-4 gap-12">
      <Header />
      <main>
        <StudentsWorldWideSection />
      </main>
    </div>
  );
}

export default App;
