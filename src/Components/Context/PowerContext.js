import { createContext } from 'react';

const PowerContext = createContext({
  isOn: 'greenLightInactive',
});

export default PowerContext;
