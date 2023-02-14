import { createContext } from "react";

interface AppContextType {
  currentDay: string;
  winners: {
    day: string;
    name: string;
  }[];
  addWinners: Function;
  contestants: string[];
  addContestant: Function;

}

export const AppContext = createContext<AppContextType>({ currentDay: 'Monday', winners: [], addWinners: () => { }, contestants: [], addContestant: () => { } });