import React from "react";
import "./filter.css"
import { categoryList } from "../../../data/data";
import MainCategory from "../../Partials/MainCategory/MainCategory";

const Filter = ({ selectedCategory, selectToggle }) => {
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
    </div>
  );
};

export default Filter;
