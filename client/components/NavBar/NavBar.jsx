import React from "react";
import { useSelector } from "react-redux";
import Button from "C/Button";

function NavBar() {
  const categories = useSelector((state) => state.category.categoryNames);

  // console.log(categories)
  const arrCategories = categories.map((category) => {
    return <Button key={category.id} c={category} />;
  });

  return <div className="nav">{arrCategories}</div>;
}

export default NavBar;
