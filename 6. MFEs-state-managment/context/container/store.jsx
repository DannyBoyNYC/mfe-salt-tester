import React, {createContext, useContext, useState } from "react";

const ParentContext = createContext([[], () => {}]);

export const ParentContextProvider = ({children}) => {
    return (
        <ParentContext.Provider value={useState([])}>
            {children}
        </ParentContext.Provider>
    )
}

export const useParentContext = () => {
    return useContext(ParentContext);
}
