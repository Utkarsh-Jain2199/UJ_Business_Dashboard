
import React, { createContext, useContext, useEffect, useState } from 'react';

const ColorSchemeContext = createContext();

export const ColorSchemeProvider = ({ children }) => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  useEffect(() => {
    const storedColorScheme = localStorage.getItem('theme');
    if (storedColorScheme === 'dark') {
      setDarkModeEnabled(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const switchColorScheme = () => {
    setDarkModeEnabled(!darkModeEnabled);
    if (!darkModeEnabled) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <ColorSchemeContext.Provider value={{ darkModeEnabled, switchColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export const useColorScheme = () => useContext(ColorSchemeContext);