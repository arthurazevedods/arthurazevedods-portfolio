import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Navbar />
      {/* Conteúdo principal */}
      <main className="flex-1">
        {/* ... */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
