import "./styles.css";
import Greet from "./Greet";

export default function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        <p>Bhai ye children hai pehle waale greet element ka</p>
      </Greet>
      <Greet name="Chamila" heroName="Baborao">
        <button>Click Me</button>
        <p>Children second waale greet element ka</p>
      </Greet>
      <Greet name="Totla Seth" heroName="Talis Lakh" />
    </div>
  );
}
