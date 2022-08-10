import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from './AuthSlice';
import  PersonalInfoSlice  from './PersonalInfoSlice';



export const store = configureStore({
  reducer: {
    auth : authSlice,
    personal : PersonalInfoSlice,
  }
})