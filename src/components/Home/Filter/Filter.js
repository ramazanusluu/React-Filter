import React from "react";
import "./filter.css";
import { categoryList, ratingList } from "../../../data/data";
import MainCategory from "../../Partials/MainCategory/MainCategory";
import Brand from "../../Partials/Brand/Brand";

const Filter = ({
  selectedCategory,
  selectToggle,
  selectedRating,
  selectRating,
  brands,
  changeChecked,
}) => {
  return (
    <div className="f-container">
      <div className="filter-group">
        <h3 className="f-category">Category</h3>
        <MainCategory
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>
      <div className="filter-group">
        <h3 className="f-category">Brand</h3>
        {brands.map((brand) => (
          <Brand key={brand.id} brand={brand} changeChecked={changeChecked} />
        ))}
      </div>
      <div className="filter-group">
        <h3 className="f-category">Star Rating</h3>
        <MainCategory
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );
};

export default Filter;
