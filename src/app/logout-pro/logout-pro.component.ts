import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-logout-pro',
  templateUrl: './logout-pro.component.html',
  styleUrls: ['./logout-pro.component.sass']
})
export class LogoutProComponent implements OnInit {

  	constructor(private router: Router, private session: SessionService) { }

  	ngOnInit() {
  		this.logout();
  	}

  	logout() {
  		this.session.logoutPro();
  		this.router.navigate(['/']);
  	}

}
