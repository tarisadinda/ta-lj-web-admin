import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slices/modalSlice";
import alertSlice from "./slices/alertSlice";

export const store = configureStore({
    reducer: {
        modal: modalSlice,
        alert: alertSlice,
    }
})