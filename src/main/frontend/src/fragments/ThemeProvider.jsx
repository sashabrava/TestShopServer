import React, { useState } from 'react';

export const interfaceLight = 0;
export const interfaceDark = 1;
export const ThemeContext = React.createContext(interfaceLight);

export const ThemeProvider = ({ children, interfaceChosen }) => {
  const [currentTheme, setCurrentTheme] = useState(
    interfaceChosen || interfaceLight
  );
  return (
    <ThemeContext.Provider
      value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
