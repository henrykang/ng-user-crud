import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  public doRegistration(user: User) {
    return this.http.post("http://localhost:8080/register", user, {responseType: 'text' as 'json'});
  }

  public getUsers() {
    return this.http.get("http://localhost:8080/users");
  }

  public getUserByEmail(email: string) {
    return this.http.get("http://localhost:8080/users/" + email);
  }

  public deleteUser(id: number) {
    return this.http.delete("http://localhost:8080/cancel/" + id);
  }
}
