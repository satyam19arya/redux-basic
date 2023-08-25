import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/messageSlice";
import notesReducer from "./slices/notesSlice";


export default configureStore({
    reducer: {
        messageReducer,
        notesReducer
    }
})