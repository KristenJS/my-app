import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  profileForm = new FormGroup({
    userName: new FormControl(''),
    age: new FormControl('')
  });

  ngOnInit(): void {}

  onSubmit() {
    localStorage.setItem('user',JSON.stringify(this.profileForm.value))
    this.profileForm.reset()
  }

}
