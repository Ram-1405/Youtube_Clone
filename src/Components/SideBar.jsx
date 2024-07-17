import React from "react";
import { categories } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    const setting = (categoryName) => {
        setSelectedCategory(categoryName);
    };
    return(
  <div className="flex-1 flex-col md:flex-none bg-gray-900 border-r bg-gray-800 ml-0 px-2 md:px-4 py-6 overflow-y-auto">
    {categories.map((category) => (
      <button
      onClick={() => setting(category.name)}
        className={`${category.name === selectedCategory ? 'bg-red-700' : ' bg-gray-900'} text-white text-left py-2 px-4 w-[100%] rounded mb-2`}
        key={category.name}
      >
        <span className="mr-2">
            <FontAwesomeIcon icon={category.icon}/></span>
        {category.name}
      </button>
    ))}
  </div>
    );
};

export default Sidebar;
