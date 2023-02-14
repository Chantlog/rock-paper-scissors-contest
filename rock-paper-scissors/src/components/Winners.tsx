import './Winners.scss';

export default function Winners(props: {
  winners: {
    day: string;
    name: string;
  }[]
}) {

  const winners = props?.winners;

  return (
    <div className='winners'><div className='winners-header'>Most Recent Winners</div>
      <hr />
      {winners.map((winner, i) => {
        return <div className='winner' key={i}><div>{winner.day}</div><div>{winner.name}</div></div>
      })}
    </div>
  )
}
