import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  users: (() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      try {
        return JSON.parse(storedUsers); 
      } catch (error) {
        console.error("Invalid JSON data in localStorage for 'users'", error);
        return null; 
      }
    }
    return null; 
  })(),
  loading: false,
  error: null,
};


export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        users: null,  
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        users: action.payload,  
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        users: null,  
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        users: null, 
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
      localStorage.setItem("users", JSON.stringify(state.users));
  }, [state.users]);
  

  return (
    <AuthContext.Provider
      value={{
        users: state.users,  
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
