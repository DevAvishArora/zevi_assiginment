import React from "react";
import "./Home.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import Logo from "../../components/Logo/Logo";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="background-image">
        <Logo />
        <div className="home-content">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
