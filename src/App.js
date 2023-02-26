import "./App.css";
import { GlobalStyles } from "./Global.styled";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
