import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../../core/models/quiz';
import { quizdata } from '../../../core/data/quizdata';
import { QuestionComponent } from "../question/question.component";
import { PaginationComponent } from "../../../share/components/pagination/pagination.component";
import { DisplayComponent } from "../../../share/components/display/display.component";

@Component({
  selector: 'obs-quiz',
  imports: [QuestionComponent, PaginationComponent, DisplayComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit{
    data:Quiz;
    currentquestion:number=0;

    modedisplay:string='quiz';

  ngOnInit(): void {
    this.data=new Quiz(quizdata);
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
