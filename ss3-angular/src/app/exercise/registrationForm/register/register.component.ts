import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  formRegister: FormGroup;

  constructor() {
    this.formRegister = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.min(18), Validators.required]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required,Validators.pattern('^\\+84\\d{9,10}$')]),
    }, [this.checkPassWord]);
  };

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formRegister.value);
  }

  checkPassWord(password: AbstractControl) {
    const checkValuePassword = password.value.password;
    const checkValueConfirmPassword = password.value.confirmPassword;
    if (checkValuePassword !== checkValueConfirmPassword) {
      return {'incorrect': true}
    }
    return null;

  }

}
