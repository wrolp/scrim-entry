import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/AppService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private appService: AppService
  ) {}

  ngOnInit() {
    this.appService.users(data => console.log(data));
  }

}
