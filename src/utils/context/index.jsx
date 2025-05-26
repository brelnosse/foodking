import { createContext, useState } from "react";
import { colors } from "../style/colors";
export const EdgeContext = createContext();

export const EdgeContextProvider = function({children}){
  const [leftEdge, setLeftEdge] = useState(colors.maxPadding);
  const toggleLeftEdge = () =>{
    setLeftEdge(leftEdge === colors.maxPadding ? colors.minPadding : colors.maxPadding);
  }

  return (
    <EdgeContext.Provider value={{leftEdge, toggleLeftEdge}}>
      {children}
    </EdgeContext.Provider>
  );
}
