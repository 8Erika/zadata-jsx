import "./App.css";

function App() {
  const name = ["Ivan", "Luka", "Mihael"];
  const number = ["8", "9"];

  return (
    <>
      <p>Danas je ponedjeljak!</p>
      <p>Muška imena: {name.join(", ")}</p>
      <p>
        Dečki:
        {name.join(", ")}
        {" "}
        imaju isti najdraži broj {number.join(", ")}
      </p>
    </>
  );
}

export default App;
