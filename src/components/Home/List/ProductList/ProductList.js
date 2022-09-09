import React from "react";
import "../list.css";

const ProductList = ({ item }) => {
  return (
    <>
      <div className="p-card">
        <div className="p-card-header">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="p-card-body">
          <div className="top">
            <h4>{item.title}</h4>
          </div>
          <div className="bottom">
            <span>{item.category}</span>
            <span>{item.brand}</span>
          </div>
        </div>
        <div className="p-card-footer">
          <span>{item.rating}★</span>
          <span>${item.price}</span>
        </div>
      </div>
    </>
  );
};

export default ProductList;
