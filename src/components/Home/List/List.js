import React from "react";
import "./list.css"
import ProductList from "./ProductList/ProductList";

const List = ({list}) => {
  return (
    <>
     <div className="l-cards">
      {
        list.map((item) => (
          <ProductList key={item.id} item={item} />
        ))
      }
     </div>
    </>
  );
};

export default List;
