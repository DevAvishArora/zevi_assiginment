import React from "react";
import "./Home.scss";
import Logo from "../../asserts/zevi_logo.svg";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="background-image">
        <div className="logo">
          <img src={Logo} alt="zevi_logo" />
        </div>
        <div className="home-content">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
