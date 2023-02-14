import Match from './Match';
import './Tier.scss'

export default function Tier(props: { tierNum: number, matches: { firstContestant: string, secondContestant: string }[], addWinner: any }) {

    const { tierNum, matches, addWinner } = props;

    return (
        <div className='tier'><div className="title">
            {`Tier ${tierNum}`}
            <hr />
            <div className="tier-matches">
                {matches.map((match, i) => {
                    return <Match match={match} key={i} addWinner={(winner: string) => { addWinner(winner) }} />
                })}
            </div>
        </div></div>
    )
}
