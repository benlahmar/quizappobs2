import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
     let res=""
    if(args.length === 0) {
       res=value.length> 7 ? 'fort' : 'faible';
    }else
    if(args[0] === 'strict') {
      let x=value.match(/^[a-zA-Z0-9]+$/) ? 'oui' : ' non';  
       res=(value.length> 7 && x=='oui')? 'fort' : 'faible';

    }
   
    return res;
  }

}
