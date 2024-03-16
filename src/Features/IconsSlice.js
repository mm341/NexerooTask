import { createSlice} from '@reduxjs/toolkit';



export const IconSlice = createSlice({
  name: 'Mode',
  initialState:{
    mode: true,
  },
  reducers: {
    changeState :(state)=>{
      state.mode=!state.mode;
     
    },
    }
});

export const {changeState} = IconSlice.actions;

export default IconSlice.reducer;