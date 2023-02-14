import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from 'src/App-Context';
import './Matches.scss';
import Tier from './Tier';

interface Match {
    firstContestant: string;
    secondContestant: string;
}


export default function Matches() {

    const { addWinners, contestants } = useContext(AppContext)
    const [tiers, setTiers] = useState<Match[][]>([]);
    const [numMatches, setNumMatches] = useState<number>();
    const [champion, setChampion] = useState<string>();
    const winners: string[] = [];
    let loading = true;

    const fillTier = (contestants: string[]) => {

        const players = contestants.slice();

        var tempTiers = tiers.slice();
        let tier = [];

        if (players.length % 2 !== 0) {
            players.push('Bye')
        }

        setNumMatches(players.length / 2)

        for (let i: number = 0; i < players.length - 1; i += 2) {
            tier.push({ firstContestant: players[i], secondContestant: players[i + 1] });
        }

        tempTiers.push(tier);
        setTiers(tempTiers);
        winners.splice(0);
    }

    useEffect(() => {
        if (!!loading && !tiers.length) {
            loading = false;
            fillTier(contestants)
        }

    }, [contestants])

    const addWinner = (player: string) => {
        winners.push(player);

        if (winners.length == numMatches) {
            if (numMatches > 1) {
                fillTier(winners);
            }
            else {
                setChampion(winners[0]);
                addWinners(winners[0])
            }
        }
    }



    const handleSkip = () => {
        addWinners('-----');
    }

    return (
        <div className='matches'>
            <div className="header">
                <Link to='/'><div className='logout'>Logout</div></Link>
                <button className='skip-button' onClick={handleSkip}>Skip Day</button>
            </div>

            {tiers.map((tier, i) => {
                return <Tier tierNum={i + 1} matches={tier} addWinner={(winner: string) => { addWinner(winner) }} key={i} />
            })}
            {!!champion && <div className='champion'>
                The winner is {champion}!</div>}
        </div>
    )
}
