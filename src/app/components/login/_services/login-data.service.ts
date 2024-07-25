import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  constructor( private router: Router) { }

  setStorageValues(setId: string, setemail: string, setRole: string,setOldpass:string) {
    const encodedData = btoa(JSON.stringify({ id: setId, email: setemail, userRole: setRole,tempPassword:setOldpass }));
    localStorage.setItem('userData', encodedData);
  }

  getRole() {
    const encodedData = localStorage.getItem('userData');
    if (encodedData) {
      const decodedData = JSON.parse(atob(encodedData));
      console.log(decodedData)
      return decodedData.userRole;
    }
    return null;
  }

  getOldPass() {
    const encodedData = localStorage.getItem('userData');
    if (encodedData) {
      const decodedData = JSON.parse(atob(encodedData));
      return decodedData.tempPassword;
    }
    return null;
  }

  getId() {
    const encodedData = localStorage.getItem('userData');
    if (encodedData) {
      const decodedData = JSON.parse(atob(encodedData));
      return decodedData.id;
    }
    return null;
  }

  isLogin(): boolean {
    return !!localStorage.getItem('userData');
  }

  getemail() {
    const encodedData = localStorage.getItem('userData');
    if (encodedData) {
      const decodedData = JSON.parse(atob(encodedData));
      return decodedData.email;
    }
    return null;
  }

  logout() {
    localStorage.removeItem('userData');
    this.router.navigate(['']);
  }
}
