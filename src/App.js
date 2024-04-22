import "./App.css";

function App() {
  const name = ["Ivan", "Luka", "Mihael"];
  const number = ["8", "9"];

  return (
    <>
      <p>Danas je ponedjeljak!</p>
      <p>Muška imena: {name.map((i) => i.toString() + " ")}</p>
      <p>
        Dečki:
        {name.map((name) => (
          <span>
            {name}
            {name.length - 1 && ","}
          </span>
        ))}{" "}
        imaju isti najdraži broj{" "}
        {number.map((number) => (
          <span>{number}</span>
        ))}
      </p>
    </>
  );
}

export default App;
