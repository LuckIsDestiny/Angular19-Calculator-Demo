import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { from, reduce } from 'rxjs';

@Component({
  selector: 'app-calculator-obs-sub',
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator-obs-sub.component.html',
  styleUrl: './calculator-obs-sub.component.css'
})
export class CalculatorObsSubComponent {
  numberInput = signal<string>('');
  numberArray = computed(() =>
    this.numberInput()
      .split(',')
      .map((n) => Number(n.trim()))
      .filter((n) => !isNaN(n))
  );
  result = signal<number | string>(0);

  performOperation(operator: 'add' | 'subtract' | 'multiply' | 'divide') {
    const numbers = this.numberArray();
    if (numbers.length === 0) {
      this.result.set('Please enter at least one number.');
      return;
    }

    const obs$ = from(numbers);

    let operation$;

    switch (operator) {
      case 'add':
        operation$ = obs$.pipe(reduce((acc, curr) => acc + curr, 0));
        break;
      case 'subtract':
        operation$ = obs$.pipe(reduce((acc, curr) => acc - curr));
        break;
      case 'multiply':
        operation$ = obs$.pipe(reduce((acc, curr) => acc * curr, 1));
        break;
      case 'divide':
        if (numbers.slice(1).includes(0)) {
          this.result.set('Cannot divide by zero');
          return;
        }
        operation$ = obs$.pipe(reduce((acc, curr) => acc / curr));
        break;
    }

    operation$?.subscribe((res) => this.result.set(res));
  }

}
