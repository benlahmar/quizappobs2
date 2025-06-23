import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../../core/models/quiz';
import { quizdata } from '../../../core/data/quizdata';
import { QuestionComponent } from "../question/question.component";
import { PaginationComponent } from "../../../share/components/pagination/pagination.component";
import { DisplayComponent } from "../../../share/components/display/display.component";
import { QuizConfigComponent } from "../quiz-config/quiz-config.component";
import { ColordisplayDirective } from '../../../share/directives/colordisplay.directive';
import { DatePipe, JsonPipe, PercentPipe } from '@angular/common';
import { TestPipe } from '../../../share/pipes/test.pipe';
import { QuestionPipe } from '../../../share/pipes/question.pipe';
import { ActivatedRoute } from '@angular/router';
import { csharp } from '../../../core/data/csharp';

@Component({
  selector: 'obs-quiz',
  imports: [QuestionPipe, JsonPipe, TestPipe, PercentPipe, DatePipe, ColordisplayDirective, QuestionComponent, PaginationComponent, DisplayComponent, QuizConfigComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit{
    data:Quiz;
    currentquestion:number=0;

    modedisplay:string='quiz';
    date:Date;
  durree:number=0;
  theme:any;
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {

    this.route.params.subscribe(p=>{
      this.theme=p['quizId'];
      switch (this.theme) {
        case 'aspnet':
          this.data=new Quiz(quizdata);
          break;
        case 'csharp':
        this.data=new Quiz(csharp);
        break;
        
        default:
          break;
      }

    })
    

    setInterval(() => {
      this.date=new Date();
      this.durree++;
      if(this.data.config.duration*60<this.durree)
      {
        this.modedisplay='submit';
      }

    }, 1000);
    
  }
recuperer(x:any)
{
  console.log("recuoperation de "+x);
  this.currentquestion=x;
}
getdisplay(x:any)
{
  this.modedisplay=x;
  
}

score()
{
  let s=0;
  this.data.questions.forEach(q => {
    if(q.isCorrect())
    {
      s++;
    }
  }
);
return s*100/(this.data.questions.length);
}

}
