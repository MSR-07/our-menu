import React from 'react';

const Categories = ({ categories, filterItems }) => {
    return (
      <div className="mb-16 flex justify-center">

   
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className="bg-transparent text-base capitalize my-0 mx-2 tracking-[1px] py-1 px-3 text-[#c59d5f] cursor-pointer transition-all duration-150 rounded hover:bg-[#c59d5f] hover:text-white"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  };

export default Categories;
