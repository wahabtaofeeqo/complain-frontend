import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ComplainService } from '../complain.service';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})


export class LoginComponent implements OnInit {

	  loginForm;

  	constructor(private builder: FormBuilder, 
                private complainService: ComplainService,
                private session: SessionService, 
                private router: Router) {

  		this.loginForm = this.builder.group({
  			username: ['', Validators.required],
  			password: ['', Validators.required]
  		});
  	}

  	ngOnInit() {
      if (this.session.getStudent() != null) {
          this.router.navigate(['/']);
      }
  	}

  	processLogin(data) {
  		
      this.complainService.login(data).subscribe(res => {
          if (res.error) {
              alert(res.errorMessage);
          }
          else {
              this.session.student(res.data);
              this.router.navigate(['/profile']);
          }
      })
  	}
}
