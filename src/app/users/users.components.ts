import {Component, OnInit} from 'angular2/core';
import {UsersService} from "../services/usersService";
import {RouteConfig, Router} from 'angular2/router';

@Component({
  selector: 'users',
  providers: [
    UsersService
  ],
  styles: [`
    .superuser {
      background-color: #eee;
    }
  `],
  template: `
    <h3>Users</h3>
    <table class="mdl-data-table mdl-js-data-table  mdl-shadow--2dp">
      <thead>
      <tr>
        <th>id</th>
        <th class="mdl-data-table__cell--non-numeric">Username</th>
        <th class="mdl-data-table__cell--non-numeric">Roles</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="#user of userslist" [class.superuser]="user.superuser">
        <td>{{user.id}}</td>
        <!--<td class="mdl-data-table__cell&#45;&#45;non-numeric" (click)="onClick(user.username)">-->
        <td class="mdl-data-table__cell--non-numeric">
          <span *ngIf="user.superuser"><i class="material-icons" style="font-size: 18px">security</i></span>
          {{user.username}}
        </td>
        <td class="mdl-data-table__cell--non-numeric">{{user.roles.join(', ')}}</td>
      </tr>
      </tbody>
    </table>`
})
export class Users {
  private userslist;
  constructor(users: UsersService) {
    users.get().subscribe(data => this.userslist = data.users);
  }
}
