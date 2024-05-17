import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark"
};

const themeSlice = createSlice({
    name: "globalTheme",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "dark" ? "light" : "dark";
        }
    }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;