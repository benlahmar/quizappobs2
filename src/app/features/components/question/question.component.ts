import { Component, Input } from '@angular/core';
import { Question } from '../../../core/models/question';
import { OptionComponent } from "../option/option.component";

@Component({
  selector: 'obs-question',
  imports: [OptionComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {

  @Input()
  qdata:Question;
  @Input()
  qindex:number;

}
