import "./MyInfo.css";

function MyInfo() {
  return (
    <div className="my-info">
      <h1>Привіт, я Ігор!</h1>
      <p>Це перший параграф у власному компоненті.</p>
      <p>А це другий параграф.</p>

      <h2>Мої улюблені речі:</h2>
      <ul>
        <li>Фотографія</li>
        <li>Ігри</li>
        <li>Formula 1</li>
      </ul>

      <h2>План на день:</h2>
      <ol>
        <li>Намагатися прокинутися</li>
        <li>Зробити лабораторну роботу по React</li>
        <li>Зробити перерву</li>
      </ol>
    </div>
  );
}

export default MyInfo;