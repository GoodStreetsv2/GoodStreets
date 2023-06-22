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
        name: 'mad',
        iconName: 'mad',
    },
  {
        id: 3,
        name: 'poo',
        iconName: 'poo',
    },
  {
        id: 4,
        name: 'skull',
        iconName: 'skull',
    },
  {
      id: 5,
      name: 'heart',
      iconName: 'heart'
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
