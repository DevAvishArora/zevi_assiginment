import React, { useState } from "react";
import SearchIcon from "../../asserts/search.svg";
import "./SearchBar.scss";
import {
  LatestTrendType,
  SuggestionType,
  fetchLatestTrendData,
  fetchSuggestionData,
} from "../../services/fakerdata";

const SearchBar: React.FC = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [latestTrends, setLatestTrends] = useState<LatestTrendType[]>([]);
  const [popularSuggestions, setPopularSuggestions] = useState<
    SuggestionType[]
  >([]);

  const handleSearchBarClick = async () => {
    setShowSuggestions(true);
    const trends = await fetchLatestTrendData();
    const suggestions = await fetchSuggestionData();
    setLatestTrends(trends);
    setPopularSuggestions(suggestions);
  };

  return (
    <div className="search-container">
      <form className="search-bar">
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
                <div className="trend-item" key={index}>
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
                  <div key={index} className="suggestion_product">
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
