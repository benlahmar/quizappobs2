import { Pipe, PipeTransform } from '@angular/core';
import { Question } from '../../core/models/question';

@Pipe({
  name: 'question'
})
export class QuestionPipe implements PipeTransform {

  transform(value: Question[], ...args: unknown[]): Question[] | null {
    if(args.length === 0) {
      return value;
    }
    
      if(args[0] === 'selected') {
       
        if(args[1] === 'not') 
         { return value.filter(q => !q.isselected());}
        else
         { return value.filter(q => q.isselected());}
      }
    
       if(args[0] === 'correct') {
        return value.filter(q => q.isCorrect ());
      }
    
    return null;
  }

}
