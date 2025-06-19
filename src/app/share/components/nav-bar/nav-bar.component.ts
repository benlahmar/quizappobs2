import { Component, OnInit } from '@angular/core';
import { LogService } from '../../../core/services/log.service';

@Component({
  selector: 'obs-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  inf:string
  constructor( private log:LogService){}
  ngOnInit(): void {
   this.inf=this.log.getdata();
  
   this.log.message$.subscribe(s=>{
    this.inf=s;
   })
  }

  setinfo()
  {
    this.log.setData('changement de navbar')
  }
}
