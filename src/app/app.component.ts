import { Component } from '@angular/core';
import { QuizComponent } from "./features/components/quiz/quiz.component";
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./share/components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quizappobs2';
}
