import {Http} from "angular2/http";
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  private users;

  constructor(private http: Http) {
    this.users = [
      {
        id: 34,
        username: "Batman",
        roles: ["admin", "user"]
      },
      {
        id: 67,
        username: "Spiderman",
        roles: ["user"]
      }
    ];
  }

  get() {
    //return this.users;
    let x = this.http.get("/assets/users.json").map(response => response.json());
    return x;
  }
}
