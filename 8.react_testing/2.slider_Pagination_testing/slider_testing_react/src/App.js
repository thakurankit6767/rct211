import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Slider from "./Components/Slider";
import axios from "axios";

function App() {
  const [pg, setPg] = useState(0);
  const [dt, setDt] = useState([]);
  const [tc, setTc] = useState(0);
  console.log("tc:", tc);
  const fetchDta = (pg) => {
    axios
      .get(`http://localhost:8080/quetions?_page=${pg}&_limit=1`)
      .then((result) => {
        setTc(Number(result.headers["x-total-count"]));
        setDt(result.dt);
      });
  };

  useEffect(() => {
    fetchDta(pg);
  }, [pg]);

  const handlePrevioues = () => {
    setPg(pg - 1)
  }

  return (
    <div className="App">
      <h3 dt-testid="pg">SLIDER: {pg}</h3>
      <div>
        {dt.map((elem) => (
          <div key={elem.id}>
            <div>{elem.question}</div>
            <div>Ans: {elem.answer}</div>
          </div>
        ))}
      </div>
      <Slider
        dt-testid="btn"
        handleOnClickInc={() => handlePrevioues()}
        disabledPrevious={pg <= 1}
      >
        Prev
      </Slider>
      <Slider
        dt-testid="btn"
        disabledNext={tc <= pg}
        handleOnClickDecriment={() => setPg(pg + 1)}
      >
        Next
      </Slider>
    </div>
  );
}

export default App;