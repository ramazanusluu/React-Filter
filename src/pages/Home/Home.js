import React, { useState } from "react";
import "./home.css";
import Search from "../../components/Home/Search/Search";
import Filter from "../../components/Home/Filter/Filter";
import List from "../../components/Home/List/List";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleSelectCategory = (event, value) =>
    // if not select category than show all or selected category => ? == if, === or
    !value ? null : setSelectedCategory(value);
  return (
    <div className="h-container">
      <Search />
      <div className="h-row">
        <div className="h-col">
          <Filter
            selectedCategory={selectedCategory}
            selectToggle={handleSelectCategory}
          />
        </div>
        <div className="h-col">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
