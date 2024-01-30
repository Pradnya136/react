import { createContext } from "react";


const UserContext = createContext(
    LoggedInUser = "default",
    place = "Yemen"
)

export default UserContext;