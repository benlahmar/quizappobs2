import { Component, Input } from '@angular/core';
import { QuizConfig } from '../../../core/models/quizconfig';
import { FormsModule } from '@angular/forms';
import { TableDirective } from '../../../share/directives/table.directive';
import { ConfigStore } from '../../../core/configstore/config.store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectConfigAllowreview, selectConfigShowclock, selectquizid } from '../../../core/configstore/config.selecteur';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { showclock } from '../../../core/configstore/config.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'obs-quiz-config',
  imports: [FormsModule,CommonModule],
  templateUrl: './quiz-config.component.html',
  styleUrl: './quiz-config.component.css'
})
export class QuizConfigComponent {

@Input()
dataconfig:QuizConfig;

quizid$:Observable<string>;
allowback$:Observable<boolean>;
alloreview$:Observable<boolean>;
showclock$:Observable<boolean>

vshowclock:boolean=true
constructor(private store:Store<{Config:ConfigStore}>)
{
  this.quizid$=store.select(selectquizid);
  this.alloreview$=store.select(selectConfigAllowreview);
  this.alloreview$=store.select(selectConfigAllowreview);
  this.showclock$=store.select(selectConfigShowclock)

}
showclock(v:boolean)
{
  console.log('dispatch action showClock')
  this.store.dispatch(showclock({show:v}))
  this.showclock$.subscribe(x=>{
    console.log(x)
    this.vshowclock=x
  })
}
}
