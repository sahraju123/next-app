'use client'
import { createContext, useState, useContext } from "react";


// Create a Context
const GlobalContext = createContext();

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const [universityUrl, setUniversityUrl] = useState("");


  return (
    <GlobalContext.Provider value={{ menuOpen, setMenuOpen, theme, setTheme, isOpen , setIsOpen, universityUrl,setUniversityUrl }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook to use Context
export const useGlobalContext = () => useContext(GlobalContext);
