import "./CreateRoom.scss"

const CreateRoom = () => {
  return (
    <div>
      <div className="inputs">
        <div className="side-create-room">
          <h3>Pseudo</h3>
          <div className="input-pseudo">
            <input type="text" placeholder="Write here..." name="text" className="input" />
          </div>
        </div>
      </div>
    </div>
  );
}


export default CreateRoom