import React from "react";
import "./productItems.css";

function CategoryButton({ category, isSelected, onSelect }) {
  return (
    <div>
      <button
        className={`category-button ${isSelected ? "selected" : ""}`}
        onClick={onSelect}
      >
        {category}
      </button>
    </div>
  );
}

export default CategoryButton;
