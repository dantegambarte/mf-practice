import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  viewForm(): void {
    console.log(this.form.value);
  }

  openMainMF(): void {
    if (this.form.valid) {
      localStorage.setItem('authCode', 'Pass');
      this.router.navigate(['/main']);
    } else {
      this.form.markAllAsTouched();
      console.error('Invalid inputs');
    }
  }
}
