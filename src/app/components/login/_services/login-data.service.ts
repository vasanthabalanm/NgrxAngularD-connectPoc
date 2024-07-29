import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  constructor( private router: Router) { 
    this.getRole();
  }
  private role!:string;

  setStorageValues(setId: string, setemail: string, setRole: string,setOldpass:string) {
    const encodedData = btoa(JSON.stringify({ id: setId, email: setemail, userRole: setRole,tempPassword:setOldpass }));
    localStorage.setItem('userData', encodedData);
  }

  getRole() {
    const encodedData = localStorage.getItem('userData');
    if (encodedData) {
      const decodedData = JSON.parse(atob(encodedData));
      this.role = decodedData.userRole;
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

  getAdmin():boolean{
    const encodedData = localStorage.getItem('userData');
    if (encodedData) {
      const decodedData = JSON.parse(atob(encodedData));
      let role = decodedData.userRole;
      if(role == 'Admin'){
        return true
      }
      return false;
    }
    
    return false;
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

 

  getUser():boolean{
    const encodedData = localStorage.getItem('userData');
    if (encodedData) {
      const decodedData = JSON.parse(atob(encodedData));
      let role = decodedData.userRole;
      if(role == 'User'){
        return true
      }
      return false;
    }
    
    return false;
  }
}
