import { useState } from 'react';
import './App.scss';
import Home from 'src/components/Home';
import { AppContext } from './App-Context';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Matches from './components/Matches';

function App() {

  const [contestants, setContestants] = useState<any | string[]>([])
  const [winners, setWinners] = useState<any>([]);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const getCurrentDayOfWeek = (): string => {

    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();
    return daysOfWeek[currentDayIndex];
  }

  const [currentDay, setCurrentDay] = useState<string>(getCurrentDayOfWeek());

  const handleAddContestant = (name: string) => {
    var newList = contestants.slice();
    newList.push(name);
    setContestants(newList);

  }

  const getNextDayName = (currentDayName: string): string => {
    const currentDayIndex = daysOfWeek.indexOf(currentDayName);
    const nextDayIndex = (currentDayIndex + 1) % 7;
    return daysOfWeek[nextDayIndex];
  }

  const addWinner = (name: string) => {
    const tempWinners = winners.slice();
    tempWinners.unshift({ day: currentDay, name });

    if (tempWinners.length > 7) {
      tempWinners.shift();
    }

    setWinners(tempWinners)

    setCurrentDay(getNextDayName(currentDay));
    setContestants([])

  }



  return (
    <AppContext.Provider value={{ currentDay: currentDay, winners: winners, addWinners: (name: string) => { addWinner(name) }, contestants: contestants, addContestant: (name: string) => { handleAddContestant(name) } }}>
      <div className="App">
        <div className='App-header'>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/matches' element={<Matches />} />
            </Routes>
          </Router>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
