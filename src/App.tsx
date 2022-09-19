import React from "react";
import "./App.css";
import UserDetails from "./features/UserDetails/UserDetails";
import UsersList from "./features/UsersList/UsersList";

const App = () => {
    return (
        <>
            <UsersList />
            <UserDetails />
        </>
    );
};

export default App;
