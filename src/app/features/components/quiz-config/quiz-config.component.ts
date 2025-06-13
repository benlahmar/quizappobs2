import { Component, Input } from '@angular/core';
import { QuizConfig } from '../../../core/models/quizconfig';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'obs-quiz-config',
  imports: [FormsModule],
  templateUrl: './quiz-config.component.html',
  styleUrl: './quiz-config.component.css'
})
export class QuizConfigComponent {

@Input()
dataconfig:QuizConfig;

}
