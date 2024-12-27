import { configureStore } from "@reduxjs/toolkit";

import coursesReducer from "./coursesSlice";

export default configureStore({
    reducer:{
        courses: coursesReducer,
    }
})