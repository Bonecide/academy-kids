import { createSlice } from '@reduxjs/toolkit'
import quests from '../fake-data/Quests.json';

const initialState = {
    info : quests
}

export const questsSlice = createSlice({
    
    name: 'quests',
    initialState,
    reducers : {
       deleteQuest : (state,action) => {
        state.info.splice (action.payload , 1)
       },
       setQuests : (state,action) => {
        state.info = action.payload
       },
       

    }
});
export const { deleteQuest,setQuests } = questsSlice.actions

export default questsSlice.reducer