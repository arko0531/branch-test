import { createSlice } from "@reduxjs/toolkit";

const ThemesSlice = createSlice({
    name: 'themes',
    initialState: {light: true},
    reducers: {
        themesChange(state) {
            state.light = !state.light;
        }
    }
});

export const themesActions = ThemesSlice.actions;

export default ThemesSlice.reducer;