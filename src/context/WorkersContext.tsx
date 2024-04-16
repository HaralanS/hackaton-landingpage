import { createContext } from 'react';
import WorkerType from '../interfaces/workerInterface';

type WorkerContextType = {
  filteredWorkers: WorkerType[] | undefined;
  setFilteredWorkers: React.Dispatch<any>;
  usingFilter: boolean;
  setUsingFilter: React.Dispatch<React.SetStateAction<boolean>>;
};

const WorkerContext = createContext({} as WorkerContextType);

export default WorkerContext;
