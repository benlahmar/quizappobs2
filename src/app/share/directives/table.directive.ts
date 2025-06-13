import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[obsTable]'
})
export class TableDirective {
@Input()
rows:number=5;
@Input()
cols:number=5;

  constructor(private ele:ElementRef,private rendu:Renderer2) { }

ngOnInit() {

  let t=this.rendu.createElement('table');
  this.rendu.setProperty(t,'border','1');
  this.rendu.setProperty(t,'cellpadding','5');
  this.rendu.setStyle(t,'box-shadow','6px 6px 6px 6px ');
  for(let i=0;i<this.rows;i++)
  {
    let tr=this.rendu.createElement('tr');
    for(let j=0;j<this.cols;j++)
    {
      let td=this.rendu.createElement('td');
      this.rendu.setProperty(td,'innerHTML',`Cellule ${i+1}-${j+1}`);
      this.rendu.appendChild(tr,td);
    }
    this.rendu.appendChild(t,tr); 
  }
  this.rendu.appendChild(this.ele.nativeElement,t);

}

}

