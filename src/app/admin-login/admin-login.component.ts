import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ComplainService } from '../complain.service';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.sass']
})
export class AdminLoginComponent implements OnInit {

	loginForm;

  	constructor(private builder: FormBuilder, 
                private complainService: ComplainService,
                private session: SessionService, 
                private router: Router) { 

  		this.loginForm = this.builder.group({
  			username: ['', Validators.required],
  			password: ['', Validators.required],
  			type: ['', Validators.required]
  		});
  	}

  	ngOnInit() {
  		if (this.session.getAdmin() != null) {
  			this.router.navigate(['/admin']);
  		}
  	}

  	processLogin(data) {
  		this.complainService.adminLogin(data).subscribe(res => {
  			console.log(res);

  			if (res.error) {
  				alert(res.errorMessage);
  			}
  			else {
  				alert("Login Successful");

  				if (res.data.type == 'pro') {
  					this.router.navigate(['pro']);
            this.session.loginPRO(res.data);
  				}
  				else {
  					this.router.navigate(['admin']);
            this.session.admin(res.data);
  				}
  			}
  		})
  	}
}
