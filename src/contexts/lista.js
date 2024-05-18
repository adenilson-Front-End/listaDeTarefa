import React, { useState } from "react";
import { createContext } from "react";

export const ListContext = createContext([]);

export default function ListProvider({children}){
    const [lista, setLista] = useState([]);
    return (
        <ListContext.Provider value={{lista, setLista}} >
            {children}
        </ListContext.Provider>
    )
}