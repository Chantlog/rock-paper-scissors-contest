import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import './Match.scss';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

export default function Match(props: { match: { firstContestant: string, secondContestant: string }, addWinner: Function }) {
  const [selected, setSelected] = useState<string>();
  let loading = true;

  const { match, addWinner } = props;

  const { firstContestant, secondContestant } = match;

  const handleSelection = (selection: string) => {
    setSelected(selection);

    selection == 'left' ? addWinner(firstContestant) : addWinner(secondContestant)

  }

  useEffect(() => {
    if (!!loading && secondContestant == 'Bye') {
      loading = false;
      handleSelection('left')
    }

  }, [])


  return (
    <div className='match'>
      <div className='contestant'>{firstContestant}</div>
      <div className='arrows'>
        <button disabled={!!selected} className={selected == 'left' ? 'arrow selected' : 'arrow'} onClick={() => handleSelection('left')}><FontAwesomeIcon icon={faCaretLeft} /></button>
        <button disabled={!!selected} className={selected == 'right' ? 'arrow selected' : 'arrow'} onClick={() => handleSelection('right')}><FontAwesomeIcon icon={faCaretRight} /></button>
      </div>
      <div className='contestant'>{secondContestant}</div>

    </div>
  )
}
