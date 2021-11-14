import React, { createContext, useContext, useReducer } from "react";
import { AuthReducer, init } from "../reducer/reducer";

export const AuthState = createContext();
export const AuthDispatch = createContext();

export function useAuthState() {
  return useContext(AuthState);
}

export function useAuthDispatch() {
  return useContext(AuthDispatch);
}

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, init)

    return (
        <AuthState.Provider value={state}>
            <AuthDispatch.Provider value={dispatch}>
                {children}
            </AuthDispatch.Provider>
        </AuthState.Provider>
    )
}