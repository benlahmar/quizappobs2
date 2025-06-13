import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../../core/models/quiz';
import { quizdata } from '../../../core/data/quizdata';
import { QuestionComponent } from "../question/question.component";
import { PaginationComponent } from "../../../share/components/pagination/pagination.component";

@Component({
  selector: 'obs-quiz',
  imports: [QuestionComponent, PaginationComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit{
    data:Quiz;
    currentquestion:number=0;

  ngOnInit(): void {
    this.data=new Quiz(quizdata);
  }
recuperer(x:any)
{
  console.log("recuoperation de "+x);
  this.currentquestion=x;
}


}
