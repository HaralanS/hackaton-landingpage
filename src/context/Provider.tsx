import React from 'react';
import { useState } from 'react';
import Context from './WorkersContext';

type ProviderProps = {
  children: React.ReactNode;
};

export default function WorkerProvider({ children }: ProviderProps) {
  const [filteredWorkers, setFilteredWorkers] = useState<any>();
  const [usingFilter, setUsingFilter] = useState(false);

  const value = {
    filteredWorkers,
    setFilteredWorkers,
    usingFilter,
    setUsingFilter,
  };
  return (
    <Context.Provider value={ value }>
      { children }
    </Context.Provider>
  );
}
