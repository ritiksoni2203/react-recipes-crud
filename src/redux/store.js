import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import recipesreducer from '../redux/recipes/slice'

const rootReducer = {
    recipes: recipesreducer
};

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
});

export default configureStore({
    reducer: rootReducer,
    middleware: customizedMiddleware
});