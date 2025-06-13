import { Component } from '@angular/core';
import { QuizComponent } from "./features/components/quiz/quiz.component";

@Component({
  selector: 'app-root',
  imports: [QuizComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quizappobs2';
}
