import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  num1 = signal<number>(0);
  num2 = signal<number>(0);
  result = signal<number>(0);

  add(){
    this.result.set(this.num1() + this.num2());
  }

  subtract(){
    this.result.set(this.num1() - this.num2());
  }

  multiply(){
    this.result.set(this.num1() * this.num2());
  }

  divide(){
    if(this.num2() !== 0){
      this.result.set(this.num1() / this.num2());
    } else {
      this.result.set(Infinity);
    }
  }

}
