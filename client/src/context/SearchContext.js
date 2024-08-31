import { createContext } from "react";

const INITIAL_STATE={
    city:undefined,
    dates:[],
    options:{
        adult:undefined,
        children:undefined,
        rooms:undefined,
    },
};

export const SearchContext =createContext(INITIAL_STATE)

const SearchReducer = (state,action)=>{
    switch(action.type){
        case "New_SEARCH":
            return action.payload
         case "RESET_SEARCH":
            return   INITIAL_STATE 
    }
}