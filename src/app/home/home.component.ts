import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
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
    else {
      this.authService.signIn(this.password).then((o) => {
        console.log(o)
        this.form.reset();
      }).catch(e => {
        console.log(e)
      })
    }
  }

}
