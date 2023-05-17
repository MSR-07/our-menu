import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="max-w-[1170px] w-[90vw] my-0 mx-auto grid grid-cols-3 gap-y-12 gap-x-8 items-center">
      {items.map((menuItems) => {
        const { id, title, img, desc, price } = menuItems;
        return (
          <article key={id} className="grid gap-y-4 gap-x-8 max-w-sm ">
          
            <img src={img} alt={title} className="object-center h-56 w-full rounded block border-4 border-[#c59d5f] " />

            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
