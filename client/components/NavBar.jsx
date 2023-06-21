import React from "react";
import { useSelector } from "react-redux";
import Button from "./Button.jsx";

function NavBar() {
  const categories = useSelector((state) => state.category.categoryNames);

  // console.log(categories)
  const arrCategories = categories.map((category) => {
    return <Button
      key={category.id}
      category={category.iconName}
    />;
  });

  return <nav className="nav">{arrCategories}</nav>;
}

export default NavBar;
