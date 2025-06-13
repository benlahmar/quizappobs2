import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'obs-display',
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {

  @Input()
  displaymode:any;
  @Input()
  class:string

@Output()
notif=new EventEmitter<any>();

  changeDisplayMode(mode: string) {
    this.displaymode = mode;
    console.log("Display mode changed to:", this.displaymode);
    this.notif.emit(this.displaymode);
  }
}
