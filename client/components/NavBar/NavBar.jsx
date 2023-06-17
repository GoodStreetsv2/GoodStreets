import React from 'react';
import Button from '../Button/Button.jsx'
import { useSelector, useDispatch } from 'react-redux';
import screaming from '../../assets/screaming.svg';

function NavBar() {
const categories = useSelector(state => state.category.categoryNames);

console.log(categories)


  return (
    <nav>
    <div className='buttons'>  
      <a><img src={screaming} alt='screaming' /></a>
      <Button/>
      <Button/>
      <Button/>
 </div>
 </nav>
  );
}

export default NavBar;
