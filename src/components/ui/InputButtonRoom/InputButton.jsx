import "./InputButton.scss"

const InputPseudo = ({placeholder, button}) => {
  return (
    <div className="input-pseudo">
      <input type="text" placeholder={placeholder} name="text" className="input" />
      <button>{button}</button>
    </div>
  )
}

export default InputPseudo