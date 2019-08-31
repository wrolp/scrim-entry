import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AppService} from '../../services/AppService';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  height: string;
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
    this.authn.authn(this.validateForm.value, (response) => {
      console.log('...');
      console.log(response);
    });
  }

  constructor(
    private fb: FormBuilder,
    private authn: AppService
  ) {}

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
