import './CardStat.scss'

const CardStat = ({statTitle, stat }) => {
  return (
    <div className='card-stat'>
      <h4>{statTitle}</h4>
      <div className='stat'>
        <span>{stat}</span>
      </div>
      
    </div>
  )
}

export default CardStat