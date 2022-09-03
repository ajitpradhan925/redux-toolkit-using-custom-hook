import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/users/userSlice";

export default configureStore({
    reducer: {
        users: userSlice
    }
})