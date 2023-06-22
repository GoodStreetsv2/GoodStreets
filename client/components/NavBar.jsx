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
    let name;
    // console.dir(e.target)
    if (e.target.ownerSVGElement) {
      id = e.target.ownerSVGElement.attributes[4].value;
      name = e.target.ownerSVGElement.attributes[5].value
    } else {
      id = e.target.attributes[4].value;
      name = e.target.attributes[5].value;
    }
    // console.log(id, name);
    dispatch(updateClickedPin({ id: Number(id), name: name }));
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
