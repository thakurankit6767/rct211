import "./App.css";
import ApiData from "./components/ApiData";
import useTimeoutHook from "./hooks/useTimeoutHook";

function App() {
  const { ready } = useTimeoutHook(7000);

  return (
    <>
      <div style={{ textAlign: "center" }}>{ready ? "Ready" : "Not-Ready"}</div>
      <ApiData />
    </>
  );
}

export default App;
