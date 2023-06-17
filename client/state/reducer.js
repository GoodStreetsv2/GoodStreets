import { createSlice} from '@reduxjs/toolkit';


const initialState = {
  hello:true,
};


export const pinSlice = createSlice({
  name: 'pin',
  initialState,
  reducers: {
    action: (state, action) => {
      // console.log(state )

    },


  },

});

export const {
  action,
} = pinSlice.actions;

export default pinSlice.reducer;
