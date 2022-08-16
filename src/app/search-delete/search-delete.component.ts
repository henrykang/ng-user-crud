import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  users: any;
  email: string = "";

  constructor(private service: RegistrationService) { }

  ngOnInit(): void {
    let res = this.service.getUsers();
    res.subscribe((data) => this.users = data);
  }

  public deleteUser(id: number) {
    let res = this.service.deleteUser(id);
    res.subscribe((data) => this.users = data);
  }

  public findUserByEmail() {
    let res = this.service.getUserByEmail(this.email);
    res.subscribe((data) => this.users = data);
  }

}
