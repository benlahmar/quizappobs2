import { Component, signal } from '@angular/core';

@Component({
  selector: 'obs-signalexemple',
  imports: [],
  templateUrl: './signalexemple.component.html',
  styleUrl: './signalexemple.component.css'
})
export class SignalexempleComponent {
    readonly count = signal(0);


    decrement()
    {
      this.count.set(3);

      console.log('The count is: ' + this.count()); 
    }
    increment()
    {
      this.count.update(value => value + 1);

      console.log('The count is: ' + this.count()); 
    }
}
