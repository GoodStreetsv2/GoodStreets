import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pins: [],
  clickedPin: null,
  noPinClicked: false,

};

export const pinSlice = createSlice({
  name: 'pin',
  initialState,
  reducers: {
    loadPins: (state, action) => {
      state.pins = action.payload;
    },
    addPin: (state, action) => {
      state.pins.push(action.payload);
    },
    updateClickedPin: (state, action) => {
      state.clickedPin = action.payload;
    },
    updateNoPinClicked: (state, action) => {
      state.noPinClicked = action.payload;
    },
  },
});

export const { loadPins, addPin, updateClickedPin, updateNoPinClicked } = pinSlice.actions;

export default pinSlice.reducer;
