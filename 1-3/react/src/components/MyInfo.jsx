import { useState } from "react";
import "./MyInfo.css";

function MyInfo({ name, age, favNumber, expression, isStudent }) {
  // стейт для введення тексту
  const [inputValue, setInputValue] = useState("");

  // стейт для числового значення
  const [count, setCount] = useState(0);

  // стейт для зміни стилю/приховування
  const [isVisible, setIsVisible] = useState(true);
  const [isStyled, setIsStyled] = useState(false);

  // підтвердження від користувача
  const handleToggle = () => {
    if (window.confirm("Змінити вигляд елементів?")) {
      setIsVisible(!isVisible);
      setIsStyled(!isStyled);
    }
  };

  return (
    <div className={`my-info ${isStyled ? "highlight" : ""}`}>
      <h1>Привіт, я {name}!</h1>
      <p>Мені {age} років.</p>
      <p>Моє улюблене число: {favNumber}</p>
      <p>Вираз 10+5 = {expression}</p>
      <p>{isStudent ? "Я студент" : "Я вже випускник"}</p>

      <hr />

      {/* введення тексту */}
      <h2>Ввести текст:</h2>
      <input
        type="text"
        placeholder="Написати текст..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Ви написали: {inputValue}</p>

      <hr />

      {/* зміна числового значення */}
      <h2>Лічильник: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Збільшити</button>
      <button onClick={() => setCount(count - 1)}>Зменшити</button>

      <hr />

      {/* зміна стилів та видимості */}
      <button onClick={handleToggle}>Змінити вигляд</button>
      {isVisible && <p>Цей текст можна приховати або показати</p>}
    </div>
  );
}

export default MyInfo;
