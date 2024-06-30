import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <div
        style={{
          paddingBottom: "100px",
        }}
      >
        <Navbar />
        <Hero />
      </div>
      <Services />
      <Footer />
    </Fragment>
  );
}

export default App;
