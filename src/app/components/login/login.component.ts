import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { users, User } from '../../shared/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userSubmitted!: boolean;
  constructor(private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.maxLength(3)])
  });

  ngOnInit() {}

  onSubmit() {
    if (this.isUserDataValid(this.loginForm.value)) {
      this.router.navigate(['/games']);
    } 
    this.loginForm.reset();
  }

  isUserDataValid(data: User) {
    const res = users.filter((user) => user.email === data.email && user.password === data.password)
    return res[0]
  }
}
