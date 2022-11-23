import React from "react";
import Banner from "../../components/banner/Banner";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Info from "../../components/info/Info";

const Home = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>
      <Hero />
      <section className="section3">
        <Info />
      </section>
      <section className="section2">
        <Banner />
      </section>
    </div>
  );
};

export default Home;