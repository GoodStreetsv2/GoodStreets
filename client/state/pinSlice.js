import { createSlice} from '@reduxjs/toolkit';


const initialState = {
  pins: [{
    id: 0,
    pinId: 1,
    name: 'a wall of tears',
    createdAt: new Date("2023-05-15"),
    lat: 40.747624,
    lng: -73.993109,
    friendly_address: '330 7th Ave, New York, NY 10001',
    userName : 'Angelo',
  },{
    id: 2,
    pinId: 1,
    name: 'another wall of tears',
    createdAt: new Date("2023-05-15"),
    lat: 40.748741,
    lng: -73.993754,
    friendly_address: '330 7th Ave, New York, NY 10001',
    userName : 'Angelo',
  }]
};






export const pinSlice = createSlice({
  name: 'pin',
  initialState,
  reducers: {
    loadPins: (state, action) => {
      // console.log(state )

    },


  },

});

export const {
  loadPins,
} = pinSlice.actions;

export default pinSlice.reducer;
