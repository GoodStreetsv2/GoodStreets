import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  latitude: null,
  longitude: null,
  address: '',
  content: '',
  created_by: '',
  active_modal: false,
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateLocation: (state, action) => {
      state.location = action.payload;
    },
    updateContent: (state, action) => {
      state.content = action.payload;
    },
    updateUsername: (state, action) => {
      state.created_by = action.payload;
    },
    updateLatitude: (state, action) => {
      state.latitude = action.payload;
    }, 
    updateLongitude: (state, action) => {
      state.longitude = action.payload;
    },
    updateAddress: (state, action) => {
      state.address = action.payload
    },
    toggleModal: (state, action) => {
      state.active_modal = action.payload
    },
    clearState: (state, action) => {
      return initialState;
    }
  }
})

export const { updateLocation, updateContent, updateUsername, updateLatitude, updateLongitude,updateAddress, clearState, toggleModal } = formSlice.actions;
export default formSlice.reducer;