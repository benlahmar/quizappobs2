import { Component, Input } from '@angular/core';
import { Question } from '../../../core/models/question';
import { OptionComponent } from "../option/option.component";
import { ColordisplayDirective } from '../../../share/directives/colordisplay.directive';

@Component({
  selector: 'obs-question',
  imports: [OptionComponent,ColordisplayDirective],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {

  @Input()
  qdata:Question;
  @Input()
  qindex:number;
  @Input()
  modedisplay:string ; // Default display mode

  displaycolor()
  {
    if(this.modedisplay=='review')
    {
      if(this.qdata.isselected())
      {
        return 'card-title alert alert-success';
      }
      else{
          return 'card-title alert alert-warning';
      }
    }else
    if(this.modedisplay=='submit'){
      if(this.qdata.isselected())
      {
           return ' alert alert-success';
      }else{
          return 'alert alert-danger';
      }
    }
    return '';
  }
}
