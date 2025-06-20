import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  let st=inject(AuthService).checkAuthentificate();
  if(st)
  {
    console.log(st)
    return true;
  }
  else{
    
    inject(Router).navigate(['/signin'])
    return false;
  }

  
};
