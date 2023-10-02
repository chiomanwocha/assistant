import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// Defining the API and catching the error
export const searchByWord = createAsyncThunk("searchByWord", async(word, thunkAPI) => {
    try{
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        return response.data
    }
    catch(err){
        const message = (err.response && err.response.data) || err.message
        return thunkAPI.rejectWithValue(message)
    }
})