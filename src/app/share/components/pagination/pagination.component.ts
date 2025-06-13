import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'obs-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  p=0;
  @Output()
  notif=new EventEmitter<any>();

  @Input()
  nbpages:number;
  @Input()
  allowback:boolean;
  send(x:any)
  {
    this.p=x;
    this.notif.emit(this.p);
  }
}
