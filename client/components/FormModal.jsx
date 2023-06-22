import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLocation, updateContent, updateUsername, clearState, toggleModal } from '../state/formSlice'
import {
  addPin,
  updateClickedPin,
  updateNoPinClicked,
} from "../state/pinSlice";
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const FormModal = () => {
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === "location") {
      dispatch(updateLocation(value));
    }
    if (name === "content") {
      dispatch(updateContent(value));
    }
    if (name === "username") {
      dispatch(updateUsername(value));
    }
  }

  // Clicked pin from state set by clicking on pin in Navbar
  const currentPin = useSelector((state) => state.pin.clickedPin);
  const noPinClicked = useSelector((state) => state.pin.noPinClicked);
  const form = useSelector(state => state.form);
  const { location, latitude, longitude, address, content, created_by } = form;

  const onSubmit = async (e) => {
    e.preventDefault()
    // create action object
    const pins = {
      pin_name: (location === '' ? 'new_pin' : location),
      latitude,
      longitude,
      address,
      content: (content === '' ? '' : content),
      created_by: (created_by === '' ? '': created_by),
      // grab category id from local state
      category_id: currentPin.id,
      name: currentPin.name,
    };

    // separately, make a post request to /pin
    const res = await fetch("/pin", {
      method: "POST",
      body: JSON.stringify(pins),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    // console.log(data);
    dispatch(updateNoPinClicked(false));
    dispatch(updateClickedPin(null));
    dispatch(clearState());
    pins._id = data._id;
    console.log(pins)
    dispatch(addPin(pins));
    dispatch(toggleModal(false))
  }

  return (
    <div className="form-modal" >
    <form className="form-control form-group" onSubmit={e => onSubmit(e)}>
      <FAIcon icon={faTimes} onClick={ () => dispatch(toggleModal(false)) } />
      <div className="form-modal-group" >
        <label htmlFor="pinName" className="form-label">Location Name: </label>
        <input name="location" type="text" id="pinName" className="form-text" placeholder="Enter a name for your pin" value={location} onChange={e => handleChange(e)} />
      </div>
      <div className="form-modal-group">
        <label htmlFor="content" className="form-label">Comments: </label>
        <input name="content" type="text" id="content" className="form-text" placeholder="Leave a comment or review" value={content} onChange={e => handleChange(e)}/>
      </div>
      <div className="form-modal-group">
        <label htmlFor="user" className="form-label">Submitted By: </label>
        <input name="username" type="text" id="user" className="form-text" placeholder="Your Name" value={created_by} onChange={e => handleChange(e)} />
      </div>
      <button type="submit" className="btn btn-primary" >Submit</button>
    </form>
    </div>
    )
}

export default FormModal;