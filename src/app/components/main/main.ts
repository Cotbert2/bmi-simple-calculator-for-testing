import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
 result: string = '';
 classifier: string = 'BMI Calculator';

 weigthInput : any = null;
 heightInput : any = null;

 calculateBMI(): void {
   const weigth = parseFloat(this.weigthInput);
   const height = parseFloat(this.heightInput);

   if (isNaN(weigth) || isNaN(height)) {
     this.result = 'Please enter valid weight and height values.';
     return;
   }

   if (height <= 0 || weigth <= 0) {
     this.result = 'Weight and height must be greater than zero.';
     return;
   }
   
   const bmi = weigth / (height * height);
   this.result = `Your BMI is ${bmi.toFixed(2)}`;
    this.classifier = this.classifyBMI(bmi);
  }

  classifyBMI(bmi: number): string {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obesity';
    }

  }
}
