import React, { useState } from "react";
import SearchIcon from "../../asserts/search.svg";
import "./SearchBar.scss";
import {
  LatestTrendType,
  SuggestionType,
  fetchLatestTrendData,
  fetchSuggestionData,
} from "../../services/fakerdata";
import { useNavigate } from "react-router-dom";

const SearchBar: React.FC = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [latestTrends, setLatestTrends] = useState<LatestTrendType[]>([]);
  const [popularSuggestions, setPopularSuggestions] = useState<
    SuggestionType[]
  >([]);
  const navigate = useNavigate();
  const handleSearchBarClick = async () => {
    setShowSuggestions(true);
    const trends = await fetchLatestTrendData();
    const suggestions = await fetchSuggestionData();
    setLatestTrends(trends);
    setPopularSuggestions(suggestions);
  };
  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    navigate("/products");
  };

  const navigateToProductsPage = () => {
    navigate("/products");
  };
  return (
    <div className="search-container">
      <form className="search-bar" onSubmit={(e) => onSubmitHandler(e)}>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          onClick={handleSearchBarClick}
        />
        <button className="search-icon-container">
          <img src={SearchIcon} alt="Search" />
        </button>
      </form>
      {showSuggestions && (
        <div className="suggestion-box">
          <div className="latest-trends">
            <div className="title">Latest Trends</div>
            <div className="trend-items">
              {latestTrends.map((trend, index) => (
                <div className="trend-item" key={index} onClick={navigateToProductsPage}>
                  <img src={trend.productImg} alt={trend.productName} />
                  <div>{trend.productName}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="popular-suggestions">
            <h2 className="title">Popular Suggestions</h2>
            <div className="suggestion-item">
              {popularSuggestions?.map((suggestion, index) => {
                return (
                  <div key={index} className="suggestion_product" onClick={navigateToProductsPage}>
                    {suggestion.productName}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
