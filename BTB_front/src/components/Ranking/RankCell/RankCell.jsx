import './RankCell.scss'

const RankCell = ({rank, pp, pseudo, points}) => {
  return (
    <div className='cell'>
      <div className='leftside-cell'>
        <h3>{rank}</h3>
        <img src={pp} alt="pp joueur" />
        <p>{pseudo}</p>
      </div>

      <div className='rightside-cell'>
        <p>{points} pts</p>
      </div>
      
    </div>
  )
}

export default RankCell