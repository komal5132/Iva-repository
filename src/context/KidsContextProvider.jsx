import React, { createContext, useState } from "react";

export const kidsContext = createContext();

const KidsContextProvider = (props) => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);  

  const showOverlay = (mode) => {  
    setOverlayVisible(true);
  };

  const hideOverlay = () => {
    setOverlayVisible(false);    
  };

  return (
    <kidsContext.Provider value={{ isOverlayVisible, showOverlay, hideOverlay }}>
      {props.children}
    </kidsContext.Provider>
  );
};

export default KidsContextProvider;
