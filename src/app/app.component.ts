import {Component, ElementRef, ViewChild} from '@angular/core';
import {AppService} from './services/AppService';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scrim';

  @ViewChild('home', null)
  home: ElementRef;

  constructor(
    private appService: AppService,
    private location: Location
  ) {}

  logout(event) {
    this.appService.logout(res => {
      if (res && res.success) {
        this.location.go('/');
        event.target.className = 'ant-menu-item';
        this.home.nativeElement.className = 'ant-menu-item ant-menu-item-selected';

        this.appService.users(data => console.log(data));
      } else {
        console.log('logout failed');
      }
    });
  }

}
