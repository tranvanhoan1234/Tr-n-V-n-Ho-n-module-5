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
      age: new FormControl('', [Validators.required,Validators.pattern('^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$')]),
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
