import { createContext } from 'react';


const AppContext = createContext();
AppContext.displayName = 'AppContext';


export const AppContextProvider = ({ children }) => {

    return (
        <AppContext.Provider value={{}}>{ children }</AppContext.Provider>
    );
};
