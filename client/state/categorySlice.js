import { createSlice} from '@reduxjs/toolkit';


const initialState = {
  categoryNames : [
    {
        id: 1,
        name: 'screaming',
        icon: '/assets/screaming.svg',
    }
  ],
};


export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    loadCats: (state, action) => {
      // console.log(state )

    },


  },

});

export const {
  loadCats,
} = categorySlice.actions;

export default categorySlice.reducer;
