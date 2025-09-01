import "./App.scss";
import { useState, useEffect, useCallback } from "react";

function App() {
  const [color, setColor] = useState("#FFFFFF");
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const changeColor = useCallback(() => {
    const hexChars = "0123456789ABCDEF";
    let newColor = "#";
    let min = 0;
    let max = 15;
    for (let i = 0; i < 6; i++) {
      let rand = Math.floor(min + Math.random() * (max + 1 - min));
      newColor += hexChars[rand];
    }
    setColor(newColor);
    document.body.style.backgroundColor = newColor;
  }, []);

  useEffect(() => {
    changeColor();
  }, [changeColor]);

  const copyColor = () => {
    navigator.clipboard.writeText(color);
    setIsPopUpOpen(true);
    setTimeout(() => {
      setIsPopUpOpen(false);
    }, 2000);
  };

  return (
    <div className="app">
      <div className="app__container">
        <p className="app__title">
          Background color:
          <span className="app__backgroundColorHex" onClick={copyColor}>
            {color}
          </span>
        </p>
        <button className="app__button" onClick={changeColor}>
          Change color
        </button>
      </div>
      <div className={`popUp ${isPopUpOpen ? "" : "popUp-hidden"}`}>
        The color has been copied <br /> to the clipboard
      </div>
    </div>
  );
}

export default App;
