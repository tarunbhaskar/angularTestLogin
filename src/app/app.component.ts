import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  rForm: FormGroup;
  post:any;                     
  userPassword:string = '';
  userName:string = '';
  titleAlert:string = 'Username is required';

  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'userName': [null, Validators.required],
      'userPassword': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      'validate' : ''
    });

  }

  ngOnInit() {
  }

  addPost(post) {
    this.userPassword = post.userPassword;
    this.userName = post.userName;

    console.log(this.userPassword);
  }

}