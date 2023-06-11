import React, { createContext, useState } from 'react';

type FiltersContextType = {
  showDropDown : boolean;
  setShowDropDown : React.Dispatch<React.SetStateAction<boolean>>;
  selectDisplay : string;
  setSelectDisplay : React.Dispatch<React.SetStateAction<string>>;
  displays : string[];
}

type FiltersContextProviderProps = {
  children : React.ReactNode
}

interface Props {
  children: React.ReactNode;
}


// const FilmsContext: FiltersContext = {showDropDown, selectDisplay , displays}

export const FiltersContext = createContext<FiltersContextType | null>(null);

export const FiltersContextProvider: React.FC<Props> = ( {children}) => {
  
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectDisplay, setSelectDisplay] = useState<string>("Mood");
  const displays =  ["Genre", "Recommender", "Mood"];
  
  const filtersContextObject = {
    showDropDown,
    setShowDropDown,
    selectDisplay,
    setSelectDisplay,
    displays
  }
  
  return (
    <FiltersContext.Provider value={filtersContextObject}>
      {children}
    </FiltersContext.Provider>
  );
}