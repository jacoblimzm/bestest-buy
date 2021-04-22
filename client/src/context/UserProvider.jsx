import { createContext, useReducer } from "react";
import userReducer from "../reducers/userReducer"

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const initialState = {
        isAuthenticated: false,
        user: {},
    }
    const [state, dispatch] = useReducer(userReducer,initialState);

    return ( 
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
     );
}
 
export default UserProvider;