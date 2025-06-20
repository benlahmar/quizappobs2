import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { LoginRequest } from '../../../core/models/loginrequest';

@Component({
  selector: 'obs-login-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent  implements OnInit{
  
msg='';
  frm:FormGroup;
  constructor(private bf:FormBuilder, private loginservice:AuthService){}

  ngOnInit(): void {
    this.frm=this.bf.group({
      log:['',Validators.required],
      pass: ['',Validators.required]

    })
  }

  onSubmit()
  {
    let d:LoginRequest;
    d=this.frm.value
    this.loginservice.signin(d)
   if( this.loginservice.checkAuthentificate())
    this.msg="sucess"
  else
    this.msg= "echec"
  }

}
