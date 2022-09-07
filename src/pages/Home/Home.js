import React from "react";
import "./home.css";
import Search from "../../components/Home/Search/Search";
import Filter from "../../components/Home/Filter/Filter";
import List from "../../components/Home/List/List";

const Home = () => {
  return (
    <div className="h-container">
      <Search />
      <div className="h-row">
        <div className="h-col">
          <Filter />
        </div>
        <div className="h-col">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
