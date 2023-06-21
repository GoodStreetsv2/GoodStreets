import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateClickedPin } from "../state/pinSlice.js";
// import Button from "./Button.jsx";
import Icon from "../utilities/Icon.jsx";

function NavBar() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categoryNames);
  const handleClick = (e) => {
    let id;
    if (e.target.ownerSVGElement) {
      id = e.target.ownerSVGElement.attributes[4].value;
    } else id = e.target.attributes[4].value;
    // console.log(id);
    dispatch(updateClickedPin(Number(id)));
  };
  // console.log(categories)
  const arrCategories = categories.map((category, index) => {
    return (
      <Icon
        onClick={handleClick}
        id={category.id}
        name={category.iconName}
        key={index}
      />
    );
  });

  return <nav className="nav">{arrCategories}</nav>;
}

export default NavBar;
