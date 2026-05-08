import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Tip } from "./components/Tip";

function App() {
  function handleRestartGame() {
    alert("Reiniciar o jogo!");
  }

  return (
    <div className={styles.container}>
      <Header current={5} max={10} onRestart={handleRestartGame} />
      <Tip tip="Uma Linguagens de programação dinâmica" />
    </div>
  );
}

export default App;
