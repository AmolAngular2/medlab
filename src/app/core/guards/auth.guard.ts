import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UtilityService } from '../utility.service';

export const authGuard: CanActivateFn = (route, state) => {
  let utility = inject(UtilityService);
  let isUserAuthenticated = utility.getAuthToken();
  if(isUserAuthenticated){
    return true ;
  }else {
     alert("Please do login first");
     return false;
  }
};
