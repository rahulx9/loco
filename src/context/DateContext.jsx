"use client"
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const DateContext = createContext();

export const useDateContext = () => {
  return useContext(DateContext);
};

export const DateProvider = ({ children }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const changeMonth = useCallback(
    (delta) => {
      const newDate = new Date(currentDate);
      newDate.setMonth(currentDate.getMonth() + delta);
      setCurrentDate(newDate);
    },
    [currentDate, setCurrentDate]
  );

  const value = useMemo(() => {
    return { currentDate, changeMonth,  };
  }, [currentDate, changeMonth]);

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};
