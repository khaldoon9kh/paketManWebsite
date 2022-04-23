import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./containers/NavBar";
import Header from "./containers/Header";
import Features from "./containers/Features";
import JoinUs from "./containers/JoinUs";
import FAQ from "./containers/FAQ";
import ContactUs from "./containers/ContactUS";
import Location from "./containers/Location";
import Footer from "./containers/Footer";
import { useEffect, useState } from "react";
import i18next from "i18next";

function App() {
  const [lang, setLang] = useState(localStorage.getItem("language"));
  const handelLang = (lang) => {
    setLang(lang);
    i18next.changeLanguage(lang);
  };
  useEffect(() => {
    if (localStorage.getItem("language") === null) {
      localStorage.setItem("language", "en");
    } else {
      localStorage.setItem("language", lang);
    }
  }, [lang]);

  return (
    <>
      <NavBar handelLang={handelLang} />
      <Header />
      <Features lang={lang} />
      <JoinUs />
      <FAQ />
      <ContactUs />
      <Location />
      <Footer />
    </>
  );
}

export default App;
