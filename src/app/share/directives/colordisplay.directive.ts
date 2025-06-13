import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[obsColordisplay]'
})
export class ColordisplayDirective {

  @Input('obsColordisplay')
  defaultcolor:string;

  constructor(private ele:ElementRef,private rendu:Renderer2) {

   }

   ngOnInit() {
      console.log("Directive ColordisplayDirective created  "+this.defaultcolor);
    this.rendu.setStyle(this.ele.nativeElement,"color",this.defaultcolor);
    this.rendu.setStyle(this.ele.nativeElement,"font-weight","bold");
    this.rendu.setStyle(this.ele.nativeElement,"font-size","1.2em");
    this.rendu.addClass(this.ele.nativeElement,"abc");
   }

   @HostListener('mouseenter', ['$event'])
    onMouseEnter() {
      this.rendu.setStyle(this.ele.nativeElement, 'color', 'blue');
      //this.rendu.setStyle(this.ele.nativeElement, 'background-color', 'gold');
    }

    @HostListener('mouseleave', ['$event'])
    onMouseLeave() {
      this.rendu.setStyle(this.ele.nativeElement, 'color', this.defaultcolor);

    }
}
