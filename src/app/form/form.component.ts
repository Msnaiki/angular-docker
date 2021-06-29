import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validator} from '@angular/forms'
import { from } from 'rxjs';
import {AuthServiceService} from '../services/auth-service.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers : [AuthServiceService]
})
export class FormComponent implements OnInit {

  LoginForm = new FormGroup({
    username : new FormControl(),
    password : new FormControl

  });
 




  constructor ( private auth: AuthServiceService ) {  }

  ngOnInit(): void {
  }

  login(){
    console.log("clicked")
    return this.auth.login(this.LoginForm.value).subscribe(res => console.log(res));

  } 

}
