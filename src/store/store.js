import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from './AuthSlice';
import  PersonalInfoSlice  from './PersonalInfoSlice';
import  questsSlice  from './QuestsSlice';



export const store = configureStore({
  reducer: {
    auth : authSlice,
    personal : PersonalInfoSlice,
    quests: questsSlice,
  }
})