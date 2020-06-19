import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <h1 id="t1" align="center">Meins krasser Taschenrechner</h1>

      <table align="center">

          <tr id="z1"><th colspan="4">          <input id="in1" placeholder="Eingabe" class="form-control"></input></th></tr>
          <tr><td><button id="btn1"      class="btn btn-outline-primary w-100">1</button></td>  <td><button id="btn2" class="btn btn-outline-primary w-100">2</button></td>  <td><button id="btn3" class="btn btn-outline-primary w-100">3</button></td>  <td><button id="btnplus"  class="btn btn-outline-primary w-100">+</button></td></tr>
          <tr><td><button id="btn4"      class="btn btn-outline-primary w-100">4</button></td>  <td><button id="btn5" class="btn btn-outline-primary w-100">5</button></td>  <td><button id="btn6" class="btn btn-outline-primary w-100">6</button></td>  <td><button id="btnminus" class="btn btn-outline-primary w-100">-</button></td></tr>
          <tr><td><button id="btn7"      class="btn btn-outline-primary w-100">7</button></td>  <td><button id="btn8" class="btn btn-outline-primary w-100">8</button></td>  <td><button id="btn9" class="btn btn-outline-primary w-100">9</button></td>  <td><button id="btnmal"   class="btn btn-outline-primary w-100">*</button></td></tr>
          <tr><td><button id="btnk"      class="btn btn-outline-primary w-100">,</button></td>  <td><button id="btn0" class="btn btn-outline-primary w-100">0</button></td>  <td><button id="btnc" class="btn btn-outline-primary w-100">C</button></td>  <td><button id="btnteiö"  class="btn btn-outline-primary w-100">/</button></td></tr>
          <tr><td colspan="4"><button id="btngleich" class="btn btn-outline-primary btn-lg w-100" >=</button></td></tr>    
      

      </table>
    </div>
  );
}


export default App;
