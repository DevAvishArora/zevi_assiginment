import React from "react";
import "./Navbar.scss";
import Logo from "../Logo/Logo";
// import SearchIcon from '../../asserts/search.svg';
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <div className="products_navbar">
      <div></div>
      <Logo />
      <div >
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
