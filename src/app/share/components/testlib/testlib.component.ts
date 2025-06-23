import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MylibComponent, MylibService} from 'mylib'
@Component({
  selector: 'obs-testlib',
  imports: [MylibComponent, FormsModule],
  templateUrl: './testlib.component.html',
  styleUrl: './testlib.component.css'
})
export class TestlibComponent  {

  msg="";
  v1=""
  v=signal('init')
  constructor(private service:MylibService){

  }

  go()
  {
   this.msg= this.service.hi();
  }

  getv()
  {
    this.v1=this.v.toString()
    return this.v;
  }
  setv(x:string)
  {
    
    this.v.set(x);
    console.log(this.v)
    
  }
}
