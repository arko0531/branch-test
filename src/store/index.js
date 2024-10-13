import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter';
import themesReducer from './themes';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        themes: themesReducer
    }
});

export default store;