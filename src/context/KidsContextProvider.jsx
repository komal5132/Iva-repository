import React, { createContext, useState } from "react";

export const kidsContext = createContext();

const KidsContextProvider = ({ children }) => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [overlayMode, setOverlayMode] = useState("login"); // New state to track mode (login or signup)

  const showOverlay = (mode) => {
    setOverlayMode(mode);  // Set the mode based on button clicked
    setOverlayVisible(true);
  };

  const hideOverlay = () => {
    setOverlayVisible(false);
    setOverlayMode("login"); // Reset to login mode when closing
  };

  return (
    <kidsContext.Provider value={{ isOverlayVisible, showOverlay, hideOverlay, overlayMode }}>
      {children}
    </kidsContext.Provider>
  );
};

export default KidsContextProvider;
