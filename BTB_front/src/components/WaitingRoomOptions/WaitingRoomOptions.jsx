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
      <div className="title_container">
        <h3 className="category_title">CATEGORIES</h3>
      </div>
      <div className="category_container">
        {categories.map((category, index) => (
          <button className="category_choice" key={index}>
            <span>{category}</span>
          </button>
        ))}
      </div>

      <div className="timer_container">
        <div className="numbers">
          <h3>Timer</h3>
          <div className="values">
            <button className="number">15sec</button>
            <button className="number">30sec</button>
            <button className="number">45sec</button>
          </div>
        </div>
      </div>
      <div className="number_container">
        <div className="numbers">
          <h3>Nombre de questions</h3>
          <div className="values">
            <button className="number">10</button>
            <button className="number">20</button>
            <button className="number">30</button>
          </div>
        </div>
      </div>
      <button className="start">Start</button>
    </div>
  );
};

export default WaitingRoomOptions;
