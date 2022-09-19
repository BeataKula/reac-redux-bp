import { useSelector, useDispatch } from "react-redux";
import {
    deleteUser,
    setSelected,
    IUsersList,
} from "../../app/store/UsersListSlice";

const UsersList = () => {
    const users = useSelector((state: IUsersList) => state.usersList.users);
    const usersDispatch = useDispatch();

    const itemsList = users.map((singleUser) => (
        <li
            key={singleUser.id}
            onClick={() => {
                //console.log("onClick");
                usersDispatch(setSelected(singleUser.id));
                //console.log(singleUser);
            }}
        >
            {singleUser.first}
            <span onClick={() => usersDispatch(deleteUser(singleUser.id))}>
                &nbsp;[Delete]
            </span>
        </li>
    ));

    return <ul>{itemsList}</ul>;
};

export default UsersList;
