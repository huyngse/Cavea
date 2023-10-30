import React, { createContext, useState } from 'react';

export const CustomOrderContext = createContext();

export const CustomOrderProvider = ({ children }) => {
  const [birdType, setBirdType] = useState(null);
  const [shape, setShape] = useState(null);
  const [material, setMaterial] = useState(null);
  const [spoke, setSpoke] = useState(null);
  const [size, setSize] = useState(null);
  const [component, setComponent] = useState(null);

  const updateBirdType = (type) => {
    setBirdType(type);
  };

  return (
    <CustomOrderContext.Provider value={{ birdType, updateBirdType }}>
      {children}
    </CustomOrderContext.Provider>
  );
};