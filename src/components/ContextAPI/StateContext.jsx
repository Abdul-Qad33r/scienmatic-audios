import { createContext, useContext } from "react";

const context = createContext();

export const StateContext = ({children}) => {
    return <context.Provider value={{}}>{children}</context.Provider>
}
export const useStateContext = () => useContext(context);