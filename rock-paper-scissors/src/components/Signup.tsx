import { useContext } from 'react';
import { AppContext } from 'src/App-Context';
import './Signup.scss';
import SignupForm from './SignupForm';

export default function Signup() {
  const { currentDay, contestants, addContestant } = useContext(AppContext);


  return (
    <div className='signup'>
      <div className='signup-header'>{`Sign up for ${currentDay}'s game`} </div>
      <hr />
      <SignupForm addContestant={(name: string) => addContestant(name)} />
      <div className='title'>Contestants: </div>
      <div className='contestants'>

        {contestants?.map((name: any, index: number) => {
          return <div key={index}>{name}</div>
        })}
      </div>
    </div>
  )
}
