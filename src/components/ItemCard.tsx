import React from "react";

const ItemCard = () => {
  return (
    <div className="mt-20">
      <li className="flex flex-col w-90 h-75 border p-3 m-3 rounded-sm">
        {/* Image Container */}
        <div className="flex items-center justify-center">
          <img
            src="https://themomedit.com/wp-content/uploads/2024/04/rag-bone-featherweight-logan-jeans.jpg"
            alt="Test"
            className="h-50 w-70 rounded-sm"
          />
        </div>
        {/* Info Container */}
        <div className="flex flex-row justify-evenly items-center mt-5">
          <p>Name: </p>
          <p>Price: </p>
        </div>
      </li>
    </div>
  );
};

export default ItemCard;
