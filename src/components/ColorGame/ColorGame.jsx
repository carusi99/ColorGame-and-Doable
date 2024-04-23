import { useState } from "react";
import s from "./ColorGame.module.css";
import { getRandomColors, getStatus, rgbString, statusMessage } from "./utils";
import Button from "../Button/Button";

function getRandom(num) {
  return Math.floor(Math.random() * num);
}


  function ColorGame() {
    const [numOfColors, setNumOfColors] = useState(6);
    const [colors, setColors] = useState(getRandomColors(numOfColors));
    const [attempts, setAttempts] = useState([]);
    const [target, setTarget] = useState(getRandom(colors.length));
    const [winnerColor, setWinnerColor] = useState(null)
  

    function handleReset() {
      setAttempts([]);
      setColors(getRandomColors(numOfColors))
      setTarget(getRandom(numOfColors))
      setWinnerColor(null);

    }
  
    function handleChangeNumber(event) {
     if(event.target.value === "") return 
      let newNum = parseInt(event.target.value);
      if (![3,6,9].includes(newNum)) return
        setNumOfColors(newNum);
        setAttempts([]);
        setColors(getRandomColors(newNum));
        setTarget(getRandom(newNum));
        setWinnerColor(null)
    }
  
  const status = getStatus(attempts, target, numOfColors);
  console.log(colors[target], target, colors)

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Color Game</h1>
      <p className={s.description}>
        Guess which color correspond to the following RGB code
      </p>

      <div className={s["rgb-wrapper"]}> 
         <div className={`${s.rgb} ${s.red}`}>
          <p className={s["color-number"]}>{colors[target][0]}</p>
           <p>Red</p>
         </div>
         <div className={`${s.rgb} ${s.green}`}>
          <p className={s["color-number"]}>{colors[target][1]}</p>
           <p>Green</p>
         </div>
         <div className={`${s.rgb} ${s.blue}`}>
          <p className={s["color-number"]}>{colors[target][2]}</p>
           <p>Blue</p>
         </div>
      </div>
      <div className={s.dashboard}>
        <div className={s["number-input"]}>
          <label htmlFor="colors"># Colors</label>
          <input
            id="colors"
            type="number"
            defaultValue={numOfColors}
            onChange={handleChangeNumber}
            step={3}
            min={3}
            max={9}
          />
        </div>
        <p className={s["game-status"]}>{statusMessage[status]}</p>
        <Button variant="primary" onClick={handleReset}>Reset</Button>
      </div>
      <div className={s.squares}>
  {colors.map((color, index) => {
    const backgroundColor =  status === "win" || status === "lose" ? rgbString(colors[target]) : rgbString(color);
    const opacity = attempts.includes(index) ? "0" : "100";

          return (
            <Button
            key={index}
            style={{ backgroundColor, opacity }}
            onClick={() => {
              if(!winnerColor){
                setAttempts((prevattempts) =>[...prevattempts, index])
                if(index === target){
                  setWinnerColor(true)
                }
              }
            }}
            className={s.square}
          ></Button>
        );
      })}
    </div>
    </div>
  );
}

export default ColorGame;
