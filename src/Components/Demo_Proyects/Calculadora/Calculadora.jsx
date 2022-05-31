import React, { useState } from 'react';
import './Calculadora.scss';


export default function Calculator() {
  const [result, setResult] = useState('');

  function handleClick(e) {
    {
      /*Solo se permiten 9 caracteres */
    }
    if (result.concat(e.target.name).length > 9) {
      setResult('Error');
    } else {
      setResult(result.concat(e.target.name));
    }
  }

  function clear() {
    setResult('');
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function calculate(x) {
    try {
      x = result;
      var r = eval(x);
      {
        /*No se despliegan numeros mayores a 999999999 ni negativos */
      }
      if (r < 0 || r > 999999999) {
        setResult('Error');
        alert('Negative number');
        window.location.reload();
      } else {
        setResult(eval(result).toString());
      }
    } catch (error) {
      setResult('Error');
    }
  }
  return (
    <>
      <div className="all-container">
        <div className="calculator-container">
          {/*First row*/}
          <div id="calculator-first-row">
            <input className='aButton' id="userInput" type="text" value={result} />
          </div>
          {/*second row*/}
          <div className="calculator-row">
            <button className='aButton'  id="seven" name="7" onClick={handleClick}>
              7
            </button >
            <button className='aButton' id="eight" name="8" onClick={handleClick}>
              8
            </button >
            <button className='aButton' id="nine" name="9" onClick={handleClick}>
              9
            </button >
            <button className='aButton' id="division" name="/" onClick={handleClick}>
              ÷
            </button >
          </div>
          {/*Third row*/}
          <div className="calculator-row">
            <button className='aButton' name="4" id="four" onClick={handleClick}>
              4
            </button >
            <button className='aButton' name="5" id="five" onClick={handleClick}>
              5
            </button >
            <button className='aButton' name="6" id="six" onClick={handleClick}>
              6
            </button >
            <button className='aButton' name="*" id="mult" onClick={handleClick}>
              *
            </button >
          </div>
          {/*Fourth row*/}
          <div className="calculator-row">
            <button className='aButton' name="1" id="one" onClick={handleClick}>
              1
            </button >
            <button className='aButton' name="2" id="two" onClick={handleClick}>
              2
            </button >
            <button className='aButton' name="3" id="three" onClick={handleClick}>
              3
            </button >
            <button className='aButton' name="+" id="plus" onClick={handleClick}>
              +
            </button >
          </div>
          {/*Fifth row*/}
          <div className="calculator-row">
            <button className='aButton' name="." id="dot" onClick={handleClick}>
              .
            </button >
            <button className='aButton' name="0" id="cero" onClick={handleClick}>
              0
            </button >
            <button className='aButton' id="clear" onClick={clear}>
              Clear
            </button >

            <button className='aButton' name="-" id="sub" onClick={handleClick}>
              -
            </button >
          </div>
          {/*Sixth row*/}
          <div className="calculator-last-row">
            <button className='aButton' id="result" value={result} onClick={calculate}>
              =
            </button >
            <button className='aButton' id="backspace" onClick={backspace}>
              Delete
            </button >
          </div>
        </div>
      </div>
    </>
  );
}
