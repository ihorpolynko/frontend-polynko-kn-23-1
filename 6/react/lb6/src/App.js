// import React, { useState, useEffect } from "react";
// import { useCookies } from "react-cookie";

// function App() {
//   const [text, setText] = useState("");
//   const [cookies, setCookie] = useCookies(["myText"]);

//   useEffect(() => {
//     if (cookies.myText) {
//       setText(cookies.myText);
//     } else {
//       setText("Інформації поки немає");
//     }
//   }, [cookies]);

//   const handleChange = (e) => {
//     setText(e.target.value);
//     setCookie("myText", e.target.value, { path: "/" });
//   };

//   return (
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
//       <h1>Збереження даних у cookie</h1>
//       <input
//         type="text"
//         value={text === "Інформації поки немає" ? "" : text}
//         onChange={handleChange}
//         placeholder="Введіть текст"
//       />
//       <p>{text}</p>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";

// function App() {
//   const [text, setText] = useState("");

//   useEffect(() => {
//     const stored = localStorage.getItem("myText");
//     if (stored) {
//       setText(stored);
//     } else {
//       setText("Інформації поки немає");
//     }
//   }, []);

//   const handleChange = (e) => {
//     setText(e.target.value);
//     localStorage.setItem("myText", e.target.value);
//   };

//   return (
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
//       <h1>Збереження даних у Local Storage</h1>
//       <input
//         type="text"
//         value={text === "Інформації поки немає" ? "" : text}
//         onChange={handleChange}
//         placeholder="Введіть текст"
//       />
//       <p>{text}</p>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    const stored = sessionStorage.getItem("myText");
    if (stored) {
      setText(stored);
    } else {
      setText("Інформації поки немає");
    }
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
    sessionStorage.setItem("myText", e.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <h1>Збереження даних у Session Storage</h1>
      <input
        type="text"
        value={text === "Інформації поки немає" ? "" : text}
        onChange={handleChange}
        placeholder="Введіть текст"
      />
      <p>{text}</p>
      <p>Дані зберігаються тільки до закриття вкладки</p>
    </div>
  );
}

export default App;