import { useState } from "react";

import imgClear from "../clear.png";
import classes from "./Calculator.module.css";

const Calculator = () => {
  const [inputs, setInputs] = useState([0]);

  const clickAcHandler = () => {
    setInputs([0]);
  };

  const clickBtnHandler = (input) => {
    if (inputs.length === 1 && inputs[0] === 0) {
      return setInputs([input]);
    }
    setInputs((prev) => {
      return [...prev, input];
    });
  };

  const removeHandler = () => {
    if (inputs.length === 1 && inputs[0] === 0) {
      return 
    }
    if (inputs.length === 1) {
      return setInputs([0])
    }
    let newInputs = inputs.map(i => i)
    newInputs.pop()
    setInputs(newInputs);
  };

  const evaluateEquation = () => {
    //not done...
    let answer = eval(inputs.join(''))
    setInputs([answer]);
  };

  return (
    <div className={classes.container}>

      <div className={classes.output}>
        <p> {inputs.map((input) => input)}</p>
      </div>

      <div className={classes.grid}>
        <div className={classes.btnAC} onClick={clickAcHandler}>AC</div>
        <div onClick={removeHandler} className={classes.btnClear}>
          <img src={imgClear} alt="clear" />
        </div>
        <div onClick={clickBtnHandler.bind(null, "/")}>÷</div>

        <div onClick={clickBtnHandler.bind(null, 7)}>7</div>
        <div onClick={clickBtnHandler.bind(null, 8)}>8</div>
        <div onClick={clickBtnHandler.bind(null, 9)}>9</div>
        <div onClick={clickBtnHandler.bind(null, "*")}>×</div>

        <div onClick={clickBtnHandler.bind(null, 4)}>4</div>
        <div onClick={clickBtnHandler.bind(null, 5)}>5</div>
        <div onClick={clickBtnHandler.bind(null, 6)}>6</div>
        <div onClick={clickBtnHandler.bind(null, "-")}>-</div>

        <div onClick={clickBtnHandler.bind(null, 1)}>1</div>
        <div onClick={clickBtnHandler.bind(null, 2)}>2</div>
        <div onClick={clickBtnHandler.bind(null, 3)}>3</div>
        <div onClick={clickBtnHandler.bind(null, "+")}>+</div>

        <div onClick={clickBtnHandler.bind(null, 0)}>0</div>
        <div onClick={clickBtnHandler.bind(null, ".")}>.</div>
        <div onClick={evaluateEquation} className={classes.btnEqual}>
          =
        </div>
      </div>
    </div>
  );
};

export default Calculator;
