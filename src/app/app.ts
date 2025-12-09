import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Calculator } from './calculator';
import { Main } from "./components/main/main";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
   title = signal('LabPruebasUnitarias');

  ngOnInit(): void {
    // console.log('On Init simple test with TDD- Mateo García');
    // const spectedValue = 30;
    // const calculator = new Calculator();

    // const result = calculator.multiply(10,3);

    // console.log(
    //   (result === spectedValue)? 'Test passed' : 'Test failed'
    // )
    // console.log('------------------------------');
    // console.log('Divide test with TDD- Mateo García');
    // const spectedDivideValue = 5;
    // const divideResult = calculator.divide(10,2);

    // console.log(
    //   (divideResult === spectedDivideValue)? 'Test passed' : 'Test failed'
    // );
    // //Divide by zero test
    // console.log('------------------------------');
    // console.log('Divide by zero test with TDD- Mateo García');
    // const spectedDivideByZeroValue = null;
    // const divideByZeroResult = calculator.divide(10,0);

    // console.log(
    //   (divideByZeroResult === spectedDivideByZeroValue)? 'Test passed' : 'Test failed'
    // );
  }

}
