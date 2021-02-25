import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(1024)]),
    password: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(1024)]),
  });

  constructor() {}

  ngOnInit(): void {}

  submit() {}
}
