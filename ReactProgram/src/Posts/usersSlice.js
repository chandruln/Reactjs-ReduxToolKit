import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: "test 1"},
    { id: "1", name: "test 2"}
]

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
})

export default userSlice.reducer;
export const selectUsers = (state) => state.users;