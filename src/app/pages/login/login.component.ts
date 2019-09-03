import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AppService} from '../../services/AppService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  height: string;

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private router: Router
  ) {}

  paddingTop: string;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    // console.log(this.validateForm.value.userName);
    // console.log(this.validateForm.value.password);
    if (!this.validateForm.value.userName || !this.validateForm.value.password) {
      return;
    }
    this.appService.authn(this.validateForm.value, res => {
      if (res.success) {
        this.router.navigate(['/users']);
        // this.usersTab.nativeElement.className = 'ant-menu-item ant-menu-item-selected';
      } else {
        console.log('failed authentication');
      }
    });
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
    this.paddingTop = '60px';
    this.setHeight();

    window.addEventListener('resize', () => {
      this.setHeight();
    });
  }

  setHeight(): void {
    let h = window.innerHeight - 65;
    if (h < 300) {
      h = 300;
    }
    this.height = h + 'px';
  }

}
