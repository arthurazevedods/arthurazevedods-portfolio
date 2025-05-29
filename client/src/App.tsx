import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Navbar />
      <main>
        <Hero/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
