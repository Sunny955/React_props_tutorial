import "./styles.css";
import Greet from "./Greet";

export default function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        <p>Children of 1st Greet</p>
      </Greet>
      <Greet name="Sunny" heroName="Superman">
        <button>Click Me</button>
        <p>Children of second greet</p>
      </Greet>
      <Greet name="Tony" heroName="Iron Man" />
    </div>
  );
}
