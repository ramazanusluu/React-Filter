import React, { useEffect, useState } from "react";
import "./home.css";
import Search from "../../components/Home/Search/Search";
import Filter from "../../components/Home/Filter/Filter";
import List from "../../components/Home/List/List";
import { brand, productsList } from "../../data/data";
import Empty from "../../components/Partials/Empty/Empty";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([0, 500]);
  const [brands, setBrands] = useState(brand);
  const [list, setList] = useState(productsList);
  const [inputSearch, setInputSearch] = useState("");
  const [resultsFound, setResultsFound] = useState(false);

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
  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };
  //-----------------------------------------------------------------

  // Filtering Products

  const applyFilters = () => {
    let updateProductList = productsList;

    // Rating Filters
    if (selectedRating) {
      updateProductList = updateProductList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    //-----------------------------------------------------
    // Category Filters
    if (selectedCategory) {
      updateProductList = updateProductList.filter(
        (item) => item.category.toUpperCase() === selectedCategory.toUpperCase()
      );
    }

    //-----------------------------------------------------
    // Brand Filters
    const brandChecked = brands
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());
    if (brandChecked.length) {
      updateProductList = updateProductList.filter((item) =>
        brandChecked.includes(item.brand.toLowerCase())
      );
    }

    //-----------------------------------------------------
    // Price Filters
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];
    updateProductList = updateProductList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    //-----------------------------------------------------
    // Search Filters
    if (inputSearch) {
      updateProductList = updateProductList.filter(
        (item) =>
          item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
          -1
      );
    }

    setList(updateProductList);

    !updateProductList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, brands, selectedPrice, inputSearch]);

  return (
    <div className="h-container">
      <Search
        value={inputSearch}
        changeInput={(e) => setInputSearch(e.target.value)}
      />
      <div className="h-row">
        <div className="h-col">
          <Filter
            selectedCategory={selectedCategory}
            selectToggle={handleSelectCategory}
            selectedRating={selectedRating}
            selectRating={handleSelectRating}
            brands={brands}
            changeChecked={handleChangeChecked}
            selectedPrice={selectedPrice}
            changePrice={handleChangePrice}
          />
        </div>
        <div className="h-col">
          {resultsFound ? <List list={list} /> : <Empty />}
        </div>
      </div>
    </div>
  );
};

export default Home;
