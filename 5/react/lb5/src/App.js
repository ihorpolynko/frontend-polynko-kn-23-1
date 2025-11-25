// import React, { useState, useEffect } from "react";

// function App() {
//   const [ageOnLoad, setAgeOnLoad] = useState(null);
//   const [ageOnClick, setAgeOnClick] = useState(null);
//   const [nameInput, setNameInput] = useState("");
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://api.agify.io/?name=ihor")
//       .then((res) => {
//         if (!res.ok) throw new Error(`Помилка: ${res.status}`);
//         return res.json();
//       })
//       .then((data) => setAgeOnLoad(data))
//       .catch((err) => setError(err.message));
//   }, []);

//   const handleClick = () => {
//     if (!nameInput) return;
//     fetch(`https://api.agify.io/?name=${nameInput}`)
//       .then((res) => {
//         if (!res.ok) throw new Error(`Помилка: ${res.status}`);
//         return res.json();
//       })
//       .then((data) => setAgeOnClick(data))
//       .catch((err) => setError(err.message));
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center"
//       }}
//     >
//       <h1>Робота з API (Fetch)</h1>

//       <h2>Дані при завантаженні сторінки:</h2>
//       {ageOnLoad ? (
//         <p>{`Ім'я: ${ageOnLoad.name}, вік: ${ageOnLoad.age}`}</p>
//       ) : (
//         <p>Завантаження...</p>
//       )}

//       <h2>Введіть ім'я для перевірки:</h2>
//       <input
//         type="text"
//         value={nameInput}
//         onChange={(e) => setNameInput(e.target.value)}
//         placeholder="Введіть ім'я"
//       />
//       <button onClick={handleClick}>Отримати дані</button>

//       <h2>Дані по кнопці:</h2>
//       {ageOnClick ? (
//         <p>{`Ім'я: ${ageOnClick.name}, вік: ${ageOnClick.age}`}</p>
//       ) : (
//         <p>Натисніть кнопку</p>
//       )}

//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [ageOnLoad, setAgeOnLoad] = useState(null);
  const [ageOnClick, setAgeOnClick] = useState(null);
  const [nameInput, setNameInput] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOnLoad = async () => {
      try {
        const res = await axios.get("https://api.agify.io/?name=ihor");
        setAgeOnLoad(res.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchOnLoad();
  }, []);

  const handleClick = async () => {
    if (!nameInput) return;

    try {
      const res = await axios.get(`https://api.agify.io/?name=${nameInput}`);
      setAgeOnClick(res.data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Робота з API (Axios)</h1>

      <h2>Дані при завантаженні сторінки:</h2>
      {ageOnLoad ? (
        <p>{`Ім'я: ${ageOnLoad.name}, вік: ${ageOnLoad.age}`}</p>
      ) : (
        <p>Завантаження...</p>
      )}

      <h2>Введіть ім'я для перевірки:</h2>
      <input
        type="text"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        placeholder="Введіть ім'я"
      />
      <button onClick={handleClick}>Отримати дані</button>

      <h2>Дані по кнопці:</h2>
      {ageOnClick ? (
        <p>{`Ім'я: ${ageOnClick.name}, вік: ${ageOnClick.age}`}</p>
      ) : (
        <p>Натисніть кнопку</p>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;