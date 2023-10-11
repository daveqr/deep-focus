import React, { createContext, useContext, useState, ReactNode } from "react";

type AppContextType = {
  isDark: boolean;
  toggleDarkMode: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    console.log('in toggle')
    setIsDark((prevIsDark) => !prevIsDark);
  };

  const contextValue: AppContextType = {
    isDark,
    toggleDarkMode,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
