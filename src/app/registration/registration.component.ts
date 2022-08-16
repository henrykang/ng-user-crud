import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User("", "", 0, "");
  message: any;

  constructor(private service: RegistrationService) { }

  ngOnInit(): void {
  }

  public registerNow() {
    let res = this.service.doRegistration(this.user);
    res.subscribe((data) => this.message = data);
  }

}
