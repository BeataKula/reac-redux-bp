import { useSelector } from "react-redux";
import { IUsersList } from "../../app/store/UsersListSlice";
import DetailsList from "./DetailsList";
import { ISingleUser } from "../../app/store/UsersListSlice";

const UserDetails = () => {
    const users = useSelector((state: IUsersList) => state.usersList);
    const selectedId = users.selectedId;
    const selectedUser: ISingleUser[] = users.users.filter(
        ({ id }) => id === selectedId
    );

    const userDetailsHtml = () => {
        if (selectedId) {
            return <DetailsList {...selectedUser[0]} />;
        } else {
            return <div></div>;
        }
    };

    return (
        <div>
            <>
                <h1>Users details:</h1>
                {userDetailsHtml()}
            </>
        </div>
    );
};

export default UserDetails;
