import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ConfigStore } from '../configstore/config.store';
import { selectConfigAllowreview, selectConfigShowclock, selectquizid } from '../configstore/config.selecteur';
import { allowreview, showclock } from '../configstore/config.actions';

@Injectable({
  providedIn: 'root'
})
export class FacadeStoreService {

  quizid$:Observable<string>;
  allowback$:Observable<boolean>;
  alloreview$:Observable<boolean>;
  showclock$:Observable<boolean>

  constructor(private store:Store<{Config:ConfigStore}>) {
    this.quizid$=store.select(selectquizid);
      this.alloreview$=store.select(selectConfigAllowreview);
      this.alloreview$=store.select(selectConfigAllowreview);
      this.showclock$=store.select(selectConfigShowclock)
   }

   showclock(v:boolean)
   {
      this.store.dispatch(showclock({show:v}))
    
   }
   allowreview(e:boolean)
   {
          this.store.dispatch(allowreview({allow:e}))

   }
}
