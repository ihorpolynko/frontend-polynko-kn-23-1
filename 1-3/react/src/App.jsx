import "./App.css";
import MyInfo from "./components/MyInfo";

function App() {
  // звичайна змінна
  const myName = "Ігор";
  const myAge = 20;

  return (
    <div className="App">
      <MyInfo
        name={myName}          // змінна
        age={myAge}            // змінна
        favNumber={7}          // просте значення
        expression={10 + 5}    // вираз
        isStudent={true}       // булеве
      />
    </div>
  );
}

export default App;