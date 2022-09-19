import { ISingleUser } from "../../app/store/UsersListSlice";

const DetailsList = ({
    id,
    first,
    last,
    age,
    description,
    thumbnail,
}: ISingleUser) => {
    return (
        <ul>
            <li>{first || ""}</li>
            <li>{last || ""}</li>
            <li>{age || ""}</li>
            <li>{description || ""}</li>
            <li>{id || ""}</li>
        </ul>
    );
};

export default DetailsList;
