import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pins: [
    {
      pin_name: 'a wall of tears',
      lat: 40.747624,
      lng: -73.993109,
      address: '330 7th Ave, New York, NY 10001',
      content: '',
      created_by: 'pijjon',
      category_id: 4,
    },
    {
      pin_name: 'another wall of tears',
      lat: 40.748741,
      lng: -73.993754,
      address: '330 7th Ave, New York, NY 10001',
      content: '',
      created_by: 'pijjon',
      category_id: 3,
    },
  ],
  clickedPin: null,
};

export const pinSlice = createSlice({
  name: 'pin',
  initialState,
  reducers: {
    // loadPins: (state, action) => {},
    addPin: (state, action) => {
      state.pins.push(action.payload);
    },
    updateClickedPin: (state, action) => {
      state.clickedPin = action.payload;
    },
  },
});

export const { loadPins, addPin, updateClickedPin } = pinSlice.actions;

export default pinSlice.reducer;
