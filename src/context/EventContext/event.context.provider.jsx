"use client"
import { useReducer } from "react";
import eventReducer, { initialState } from "./reducer/reducer";
import EventContext from "./event.context";

export const EventProvider = ({ children }) => {
    const [state, dispatch] = useReducer(eventReducer, initialState);
  
    return (
      <EventContext.Provider value={{ state, dispatch }}>
        {children}
      </EventContext.Provider>
    );
  };
  
  