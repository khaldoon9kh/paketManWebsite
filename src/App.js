import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./containers/NavBar";
import Header from "./containers/Header";
import Features from "./containers/Features";
import JoinUs from "./containers/JoinUs";
import FAQ from "./containers/FAQ";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Features />
      <JoinUs />
      <FAQ />
    </>
  );
}

export default App;
