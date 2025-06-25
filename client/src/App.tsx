import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-[100vh] w-full bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
