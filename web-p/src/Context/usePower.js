import React, { createContext, useState, useContext } from 'react';

const PowerContext = createContext({});

export function usePower() {
  return useContext(PowerContext);
}

export function PowerProvider(context) {
  const children = context.children;

  const [isGreen, setIsGreen] = useState(false);
  const data = { isGreen, setIsGreen };
  return <PowerContext.Provider value={data}>{children}</PowerContext.Provider>;
}
