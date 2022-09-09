import React, { useState } from "react";
import "./home.css";
import Search from "../../components/Home/Search/Search";
import Filter from "../../components/Home/Filter/Filter";
import List from "../../components/Home/List/List";
import { brand } from "../../data/data";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [brands, setBrands] = useState(brand);

  const handleSelectCategory = (event, value) =>
    // if not select category than show all or selected category => ? == if, === or
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const brandsList = brands;
    const changeCheckedBrands = brandsList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setBrands(changeCheckedBrands);
  };
  return (
    <div className="h-container">
      <Search />
      <div className="h-row">
        <div className="h-col">
          <Filter
            selectedCategory={selectedCategory}
            selectToggle={handleSelectCategory}
            selectedRating={selectedRating}
            selectRating={handleSelectRating}
            brands={brands}
            changeChecked={handleChangeChecked}
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
