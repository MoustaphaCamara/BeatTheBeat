import "./ButtonSignIn.scss"

const ButtonSignIn = ({content}) => {
  return (
    <button className="signIn-button">
    <span className="text">{content}</span>
  </button>

  )
}

export default ButtonSignIn