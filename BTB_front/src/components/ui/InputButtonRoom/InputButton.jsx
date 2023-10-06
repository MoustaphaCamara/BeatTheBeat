/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./InputButton.scss";

const Input = ({ placeholder, button, size }) => {
    return (
        <div className="input-pseudo">
            <input type="text" placeholder={placeholder} name="text" className={`input ${size}`} />
            <Link to={`/waiting_room?room=2376&playerRoom=Askralos`}>
                <button >{button}</button>
            </Link>
        </div>
    );
};

export default Input;