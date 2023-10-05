import "./WaitingRoomOptions.scss";

const categories = [
  "disney",
  "jazz",
  "rap us",
  "hip-hop",
  "electro",
  "kpop",
  "jpop",
  "disney",
  "disney",
  "disney",
];

const WaitingRoomOptions = () => {
  return (
    <div className="waiting_container">
      <h3 className="category_title">CATEGORIES</h3>
      <div className="category_container">
        {categories.map((category, index) => (
          <button class="choice choice-custom-2" key={index}>
            <span>{category}</span>
          </button>
        ))}
      </div>

      <div className="timer_container">
        <div className="numbers">
          <h3>Timer</h3>
          <div className="values">
            <p className="number">15sec</p>
            <p className="number">30sec</p>
            <p className="number">45sec</p>
          </div>
        </div>
      </div>
      <div className="number_container">
        <div className="numbers">
          <h3>Nombre de questions</h3>
          <div className="values">
            <p className="number">10</p>
            <p className="number">20</p>
            <p className="number">30</p>
          </div>
        </div>
      </div>
      <button className="start">Start</button>
    </div>
  );
};

export default WaitingRoomOptions;
