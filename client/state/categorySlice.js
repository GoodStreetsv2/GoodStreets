import { createSlice} from '@reduxjs/toolkit';

 
const initialState = {
  categoryNames : [
    {
        id: 1,
        name: 'screaming',
        iconName: 'screaming',
    },
  {
        id: 2,
        name: 'WTF',
        iconName: 'mad',
    },
  {
        id: 3,
        name: 'screatoo realming',
        iconName: 'poo',
    },
  {
        id: 4,
        name: 'dead',
        iconName: 'skull',
    },
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
