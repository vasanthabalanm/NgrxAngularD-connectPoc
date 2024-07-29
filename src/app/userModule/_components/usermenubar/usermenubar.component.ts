import { Component } from '@angular/core';
import { LoginDataService } from '../../../components/login/_services/login-data.service';

@Component({
  selector: 'app-usermenubar',
  templateUrl: './usermenubar.component.html',
  styleUrl: './usermenubar.component.scss'
})
export class UsermenubarComponent {
  constructor(private adminser:LoginDataService){}

  logout() {
    this.adminser.logout();
  }
}
