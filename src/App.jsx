import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CallToAction from "./components/CallToAction/CallToAction";
import Hero from "./components/Hero/Hero";
import Feature from "./components/Feature/Feature";
import Pricing from "./components/Pricing/Pricing";
import ShowCase from "./components/ShowCase/ShowCase";
import Team from "./components/Team/Team";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className='container mx-auto'>
      <Header />
      <Hero />
      <CallToAction />
      <Blog />
      <Feature />
      <Pricing />
      <ShowCase />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
