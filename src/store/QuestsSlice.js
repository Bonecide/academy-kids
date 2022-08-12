import { createSlice } from '@reduxjs/toolkit'
import quests from '../fake-data/Quests.json';

const initialState = quests

export const questsSlice = createSlice({
    
    name: 'quests',
    initialState,
    reducers : {
       deleteQuest : (state,action) => {
        state.splice (action.payload , 1)
       },
       

    }
});
export const { deleteQuest } = questsSlice.actions

export default questsSlice.reducer