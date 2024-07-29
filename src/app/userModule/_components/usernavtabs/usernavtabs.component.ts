import { Component, OnInit } from '@angular/core';
import { LoginDataService } from '../../../components/login/_services/login-data.service';

@Component({
  selector: 'app-usernavtabs',
  templateUrl: './usernavtabs.component.html',
  styleUrl: './usernavtabs.component.scss'
})
export class UsernavtabsComponent implements OnInit {

  userRole!:string;
  userEmail!:string;

  constructor(private adminser:LoginDataService){}
  ngOnInit() {
    this.intializeData()
  }

  private intializeData(){
    const mail = this.adminser.getemail();
    const role = this.adminser.getRole();
    this.userRole = role;
    this.userEmail = mail;
  }

}
