import React, { Component } from 'react';

class Rechner extends Component {
    state = { 
        eingabe: "",
        zahl1: 0,
        zahl2: 0,
        plus: false,
        minus: false,
        mal: false,
        geteilt: false,
        speicher: false,
        isZahl: false
     }

     updateInput = (wert) => {

        this.setState( {eingabe: this.state.eingabe = document.getElementById("in1").value} );
        this.setState( {eingabe: this.state.eingabe + wert} );

       document.getElementById("in1").value = this.state.eingabe;
     }

    render() { 
        return ( 
            <div className="App">
                <h1 id="t1" align="center">Meins krasser Taschenrechner</h1>

                <table align="center">

                    <tr id="z1"><th colspan="4">    <input id="in1" placeholder="Eingabe" class="form-control"></input></th></tr>
                    <tr><td><button id="btn1" onClick={this.button1}     class="btn btn-outline-primary w-100">1</button></td>  <td><button id="btn2" onClick={this.button2} class="btn btn-outline-primary w-100">2</button></td>  <td><button id="btn3" onClick={this.button3} class="btn btn-outline-primary w-100">3</button></td>  <td><button id="btnplus"  onClick={this.buttonplus}  class="btn btn-outline-primary w-100">+</button></td></tr>
                    <tr><td><button id="btn4" onClick={this.button4}     class="btn btn-outline-primary w-100">4</button></td>  <td><button id="btn5" onClick={this.button5} class="btn btn-outline-primary w-100">5</button></td>  <td><button id="btn6" onClick={this.button6} class="btn btn-outline-primary w-100">6</button></td>  <td><button id="btnminus" onClick={this.buttonminus} class="btn btn-outline-primary w-100">-</button></td></tr>
                    <tr><td><button id="btn7" onClick={this.button7}     class="btn btn-outline-primary w-100">7</button></td>  <td><button id="btn8" onClick={this.button8} class="btn btn-outline-primary w-100">8</button></td>  <td><button id="btn9" onClick={this.button9} class="btn btn-outline-primary w-100">9</button></td>  <td><button id="btnmal"   onClick={this.buttonmal}   class="btn btn-outline-primary w-100">*</button></td></tr>
                    <tr><td><button id="btnk" onClick={this.buttonk}     class="btn btn-outline-primary w-100">,</button></td>  <td><button id="btn0" onClick={this.button0} class="btn btn-outline-primary w-100">0</button></td>  <td><button id="btnc" onClick={this.buttonc} class="btn btn-outline-primary w-100">C</button></td>  <td><button id="btnteiö"  onClick={this.buttonteil}  class="btn btn-outline-primary w-100">/</button></td></tr>
                    <tr><td colspan="4"><button id="btngleich" onClick={this.buttongleich} class="btn btn-outline-primary btn-lg w-100" >=</button></td></tr>    
                

                </table>
             </div>
         );
    }

    button1 = (event) => {

        //console.log(event.target.value);
        this.state.eingabe = document.getElementById("in1").value;
        this.state.eingabe += 1;
        document.getElementById("in1").value = this.state.eingabe;

        this.state.isZahl = true;
    }

    button2 = () => {

        this.state.eingabe = document.getElementById("in1").value;
        this.state.eingabe += 2;
        document.getElementById("in1").value = this.state.eingabe;

        this.state.isZahl = true;
    }

    button3 = () => {

        this.state.eingabe = document.getElementById("in1").value;
        this.state.eingabe += 3;
        document.getElementById("in1").value = this.state.eingabe;

        this.state.isZahl = true;
    }

    button4 = () => {

        this.state.eingabe = document.getElementById("in1").value;
        this.state.eingabe += 4;
        document.getElementById("in1").value = this.state.eingabe;

        this.state.isZahl = true;
    }

    button5 = () => {

        this.state.eingabe = document.getElementById("in1").value;
        this.state.eingabe += 5;
        document.getElementById("in1").value = this.state.eingabe;

        this.state.isZahl = true;
    }

    button6 = () => {

        this.state.eingabe = document.getElementById("in1").value;
        this.state.eingabe += 6;
        document.getElementById("in1").value = this.state.eingabe;

        this.state.isZahl = true;
    }

    button7 = () => {

        this.state.eingabe = document.getElementById("in1").value;
        this.state.eingabe += 7;
        document.getElementById("in1").value = this.state.eingabe;

        this.state.isZahl = true;
    }

    button8 = () => {

        this.state.eingabe = document.getElementById("in1").value;
        this.state.eingabe += 8;
        document.getElementById("in1").value = this.state.eingabe;

        this.state.isZahl = true;
    }

    button9 = () => {

        this.state.eingabe = document.getElementById("in1").value;
        this.state.eingabe += 9;
        document.getElementById("in1").value = this.state.eingabe;

        this.state.isZahl = true;
    }

    button0 = () => {

        this.state.eingabe = document.getElementById("in1").value;
        this.state.eingabe += 0;
        document.getElementById("in1").value = this.state.eingabe;

        this.state.isZahl = true;
    }

    buttonc = () => {

        document.getElementById("in1").value = "";
        this.state.speicher = false;  
        this.state.isZahl = false;
    }


   
    buttonplus = () => {

        if (this.state.isZahl) {

            if (this.state.speicher === false) {
    
                console.log("ssss");
                this.state.zahl1 = parseFloat(document.getElementById("in1").value);
                document.getElementById("in1").value = "";
                this.state.speicher = true;
    
            }
    
            else if (this.state.speicher === true) {
    
                this.state.zahl2 = parseFloat(document.getElementById("in1").value);
    
                if (this.state.minus) {
                    this.state.zahl2 = -this.state.zahl2;
                }
    
                this.state.zahl1 = this.state.zahl1 + this.state.zahl2;
                document.getElementById("in1").value = "";
    
            }
        }
    
        this.state.isZahl = false;
    
        this.state.plus = true;
        this.state.minus = false;
        this.state.mal = false;
        this.state.geteilt = false;
    }

    buttonminus = () => {

        if (this.state.isZahl) {

            if (this.state.speicher === false) {
    
                this.state.zahl1 = parseFloat(document.getElementById("in1").value);
                document.getElementById("in1").value = "";
                this.state.speicher = true;
    
            }
    
            else if (this.state.speicher === true) {
    
                this.state.zahl2 = parseFloat(document.getElementById("in1").value);
    
                if (this.state.plus) {
                    this.state.zahl2 = -this.state.zahl2;
                }
    
                this.state.zahl1 = this.state.zahl1 - this.state.zahl2;
                document.getElementById("in1").value = "";
    
            }
        }
    
        this.state.isZahl = false;
    
        this.state.plus = false;
        this.state.minus = true;
        this.state.mal = false;
        this.state.geteilt = false;
    }

    buttonmal = () => {

        if (this.state.isZahl) {

            if (this.state.speicher === false) {
    
                this.state.zahl1 = parseFloat(document.getElementById("in1").value);
                document.getElementById("in1").value = "";
                this.state.speicher = true;
    
            }
    
            else if (this.state.speicher === true) {
    
                this.state.zahl2 = parseFloat(document.getElementById("in1").value);
    
                if (this.state.plus) {
                    this.state.zahl1 = this.state.zahl1 + this.state.zahl2;
                }
                else if (this.state.minus) {
                    this.state.zahl1 = this.state.zahl1 - this.state.zahl2;
                }
                else if (this.state.geteilt) {
                    this.state.zahl1 = this.state.zahl1 / this.state.zahl2;
                }
    
                else {
    
                    this.state.zahl1 = this.state.zahl1 * this.state.zahl2;
    
                }
                    
                document.getElementById("in1").value = "";
    
            }
        }
    
        this.state.isZahl = false;
    
        this.state.plus = false;
        this.state.minus = false;
        this.state.mal = true;
        this.state.geteilt = false;
    }

    buttonteil = () => {

        if (this.state.isZahl) {

            if (this.state.speicher === false) {
    
                this.state.zahl1 = parseFloat(document.getElementById("in1").value);
                document.getElementById("in1").value = "";
                this.state.speicher = true;
    
            }
    
            else if (this.state.peicher === true) {
    
                this.state.zahl2 = parseFloat(document.getElementById("in1").value);
    
                if (this.state.plus) {
                    this.state.zahl1 = this.state.zahl1 + this.state.zahl2;
                }
                else if (this.state.minus) {
                    this.state.zahl1 = this.state.zahl1 - this.state.zahl2;
                }
    
                else if (this.state.mal) {
                    this.state.zahl1 = this.state.zahl1 * this.state.zahl2;
                }
    
                else {
    
                    this.state.zahl1 = this.state.zahl1 / this.state.zahl2;
    
                }
                    
                document.getElementById("in1").value = "";
    
            }
        }
    
        this.state.isZahl = false;
    
        this.state.plus = false;
        this.state.minus = false;
        this.state.mal = false;
        this.state.geteilt = true;
    }

    buttonk = () => {

        document.getElementById("in1").value += ".";
    }


    buttongleich = () => {

        if (this.state.isZahl) {

            this.state.zahl2 = parseFloat(document.getElementById("in1").value);
    
            if (this.state.plus) {
    
                document.getElementById("in1").value = this.state.zahl1 + this.state.zahl2;
    
            }
    
            else if (this.state.minus) {
    
                document.getElementById("in1").value = this.state.zahl1 - this.state.zahl2;
    
            }
    
            else if (this.state.mal) {
    
                document.getElementById("in1").value = this.state.zahl1 * this.state.zahl2;
    
            }
    
            else if (this.state.geteilt) {
    
                document.getElementById("in1").value = this.state.zahl1 / this.state.zahl2;
    
            }
    
            this.state.speicher = false;
    
        }
    }
}
 
export default Rechner;