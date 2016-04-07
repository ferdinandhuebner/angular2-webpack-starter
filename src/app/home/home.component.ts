import {Component, OnInit} from 'angular2/core';
import {AppState} from '../app.service';

import {Title} from './title';
import {XLarge} from './x-large';

// import {UsersService} from "../services/usersService";
import 'rxjs/add/operator/map';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
    // Title, UsersService
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    XLarge
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [ require('./home.css') ],
  //styles: [ `span {color: red;}` ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./home.html')
})
export class Home implements OnInit {
  // Set our default values
  localState = { value: '' };
  private date: Date;
  private userslist;
  // TypeScript public modifiers
  // constructor(public appState: AppState, public title: Title, users: UsersService) {
  constructor(public appState: AppState, public title: Title) {
    setInterval(() => this.date = new Date(), 1000);
    //users.get().subscribe(data => this.userslist = data.users);
  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
  }

}
