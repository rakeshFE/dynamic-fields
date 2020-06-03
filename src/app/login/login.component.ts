import { AuthenticationServiceService } from './../commons/services/authentication-service.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators  
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public returnUrl: string ='/home';
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router,
    private authenticationServiceService: AuthenticationServiceService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    if (this.authenticationServiceService.login(this.f.username.value, this.f.password.value)) {
      this.router.navigate([this.returnUrl]);
    }
  }

}
