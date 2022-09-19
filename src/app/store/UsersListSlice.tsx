import { createSlice } from "@reduxjs/toolkit";

export interface ISingleUser {
    id: number;
    first: string;
    last: string;
    age: number;
    description: string;
    thumbnail: string;
}

export interface IUsersList {
    usersList: {
        users: ISingleUser[];
        selectedId: number;
    };
}

export const UsersListSlice = createSlice({
    name: "usersListSlice",
    initialState: {
        users: [
            {
                id: 1,
                first: "Bucky",
                last: "Roberts",
                age: 71,
                description: "Bucky is a React developer and YouTuber",
                thumbnail: "http://i.imgur.com/7yUvePI.jpg",
            },
            {
                id: 2,
                first: "Joby",
                last: "Wasilenko",
                age: 27,
                description: "Joby loves the Packers, cheese, and turtles.",
                thumbnail: "http://i.imgur.com/52xRlm8.png",
            },
            {
                id: 3,
                first: "Madison",
                last: "Williams",
                age: 24,
                description: "Madi likes her dog but it is really annoying.",
                thumbnail: "http://i.imgur.com/4EMtxHB.png",
            },
        ],
        selectedId: 0,
    },
    reducers: {
        setSelected: (state, action) => {
            const userId = action.payload;

            const newState = {
                ...state,
                selectedId: userId,
            };
            state = newState;
            return state;
        },
        deleteUser: (state, action) => {
            const userId = action.payload;
            const newState = state.users.filter(
                (singleUser) => singleUser.id !== userId
            );
            state.users = newState;
            return state;
        },
        updateUserById: (state, action) => {},

        addUser: (state, action) => {},
    },
});

export const { deleteUser, setSelected, updateUserById, addUser } =
    UsersListSlice.actions;
export default UsersListSlice.reducer;
