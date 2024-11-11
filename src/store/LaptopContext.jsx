import React, { createContext, useState } from "react";

export const LaptopContext = createContext(true);

export default function ContextProvider({ children }) {
  const [showModel, setShowModel] = useState(true);

  return (
    <LaptopContext.Provider value={{ showModel, setShowModel }}>
      {children}
    </LaptopContext.Provider>
  );
}
