import { configureStore } from "@reduxjs/toolkit";
import usersListReducer from "../../app/store/UsersListSlice";

const store = configureStore({
    reducer: {
        usersList: usersListReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
