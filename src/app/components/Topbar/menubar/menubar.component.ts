import { Component } from '@angular/core';
import { LoginDataService } from '../../login/_services/login-data.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent {

  constructor(private adminser:LoginDataService){}

  logout() {
    this.adminser.logout();
  }
}
