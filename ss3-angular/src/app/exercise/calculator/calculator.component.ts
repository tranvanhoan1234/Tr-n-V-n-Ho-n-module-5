import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1: 0;
  num2: 0;
  result: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculatorSimple(num3) {
    switch (num3) {
      case "+":
        this.result = this.num1 + this.num2;
        break;
      case "-":
        this.result = this.num1 - this.num2;
        break;
      case "*":
        this.result = this.num1 * this.num2;
        break;
      case "/":
        if (this.num2 != 0) {
          this.result = this.num1 / this.num2;

        } else {
          this.result = "số chia phải lớn hơn không";
        }
    }
  }
}
