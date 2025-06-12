import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LanguagesAndFrameworks from "./components/LanguagesAndFrameworks";
import Navbar from "./components/Navbar";
import RecentWorks from "./components/RecentWorks";

function App() {
  return (
    <div className="flex flex-col min-h-[100vh] w-full bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <RecentWorks />
        <LanguagesAndFrameworks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
