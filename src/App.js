import React, { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import items from "./data/menu";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories /*setCategories*/] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <>
      <main>
        <section className="py-2 px-0 my-0 mx-auto max-w-6xl w-full ">
          <div className="text-center mb-8">
            <h2>our menu</h2>
            <div className="bg-[#c59d5f] w-20 h-1 mx-auto"></div>
  
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </section>
      </main>
    </>
  );
}

export default App;
