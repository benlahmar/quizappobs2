import { Component, OnInit } from '@angular/core';
import { LogService } from '../../../core/services/log.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../../../core/store/appstore';
import { selectCounterValue } from '../../../core/store/counterselector';
import { Observable } from 'rxjs';
import {RouterModule} from '@angular/router'
@Component({
  selector: 'obs-nav-bar',
  imports: [CommonModule,RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  counter$:Observable<number>;
  inf:string
  constructor( public log:LogService, public logservice:AuthService, private store:Store<{Counter:AppStore}>){
    this.counter$=store.select(selectCounterValue);
  }
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

  signout()
  {
    this.logservice.signout()
  }
}
