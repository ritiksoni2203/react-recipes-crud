import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { axiosApi } from "../../helpers/index";
import axios from "axios";

const initialStates = {
    data: [],
    reload: [],
    profile: []
};

// ** recipesList
export const recipesList = createAsyncThunk(
    "recipesList",
    async (searchQuery, { rejectWithValue }) => {
        try {
            const response = await axiosApi.get(`?type=public&q=${searchQuery}&app_id=62797b9e&app_key=d2672d172c0bc9197eabeff298978239`);
            return response.data.hits;
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data);
        }
    }
);

// ** getRecipe
export const getRecipe = createAsyncThunk(
    "getRecipe",
    async (recipeId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${recipeId}`);
            return response.data.recipe;
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            toast.error(error.response.data.message);
            return rejectWithValue(error.response.data);
        }
    }
);

// ** Create Slice
const recipesSlice = createSlice({
    name: "recipes",
    initialState: initialStates,
    extraReducers: {
        [recipesList.pending]: (state) => {
            state.loading = true;
        },
        [recipesList.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [recipesList.rejected]: (state) => {
            state.loading = false;
        },
        [getRecipe.pending]: (state) => {
            state.loading = true;
        },
        [getRecipe.fulfilled]: (state, action) => {
            state.loading = false;
            state.profile = action.payload;
        },
        [getRecipe.rejected]: (state) => {
            state.loading = false;
        },
    }
});

const { reducer } = recipesSlice;

export default reducer;