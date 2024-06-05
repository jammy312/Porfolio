import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Data } from './Components/Data/GetProjectsData';

interface AppContextType {
    data: Data;
    setData: (data: Data) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [data, setData] = useState<Data>({
    title: "",
    description: "",
    keyWords: [],
    start: new Date(),
    end: new Date(),
});

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};
