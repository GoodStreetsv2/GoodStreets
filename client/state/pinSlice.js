import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pins: [],
  clickedPin: null,
  noPinClicked: false,
  center: { lat: 40.747726385778655, lng: -73.9931659886829 }
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
    deletePin: (state, action)=>{
      const id = action.payload
      let index
      for (let i = 0; i < state.pins.length; i++) {
        if (state.pins[i]._id === id) {
          index = i
          break
        }
      }
      state.pins = [...state.pins.slice(0, index), ...state.pins.slice(index + 1)]
    },
    setCenter: (state, action) => {
      state.center = action.payload;
    }
  },
});

export const { loadPins, addPin, updateClickedPin, updateNoPinClicked, deletePin, setCenter } = pinSlice.actions;

export default pinSlice.reducer;
