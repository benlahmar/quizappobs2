import { Component } from '@angular/core';
import { quizdata } from '../../../core/data/quizdata';
import { Quiz } from '../../../core/models/quiz';
import { FormsModule } from '@angular/forms';
import { Question } from '../../../core/models/question';

@Component({
  selector: 'app-quiz1',
  imports: [FormsModule],
  templateUrl: './quiz1.component.html',
  styleUrl: './quiz1.component.css'
})
export class Quiz1Component {

  data:Quiz=new Quiz(quizdata);
  currentquestion = 0;
  displaymode='quiz'; 
  

  goToQuestion(p:number){
    this.currentquestion = p;
  }
  changemode(m:string){
    this.displaymode = m;
  }

  test(o:any){
    console.log(o);
  }

 
}
