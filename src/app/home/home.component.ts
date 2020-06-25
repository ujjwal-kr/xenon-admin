import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { 

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      password: ['', [
        Validators.required
      ]]
    })
  }

  get password() {return this.form.get('password').value}

  submit() {
    if (this.form.errors) return false;
    window.localStorage.setItem("password", JSON.stringify(this.password));
    this.signIn()
  }

  signIn() {

  }

}
