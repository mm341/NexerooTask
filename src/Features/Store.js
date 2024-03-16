import { configureStore } from '@reduxjs/toolkit'
import IconSlice from './IconsSlice';



export const Store = configureStore({
  reducer: {
    mode:IconSlice,
  },
});
