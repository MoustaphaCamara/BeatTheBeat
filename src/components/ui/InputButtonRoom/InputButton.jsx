import "./InputButton.scss"

const InputPseudo = ({placeholder, button, size}) => {
  return (
    <div className="input-pseudo">
      <input type="text" placeholder={placeholder} name="text" className={`input ${size}`} />
      <button>{button}</button>
    </div>
  )
}

export default InputPseudo