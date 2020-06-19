import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  	constructor(private router: Router, private session: SessionService) { }

  	ngOnInit() {
  		this.logout();
  	}

  	logout() {
  		this.session.unsetStudent();
  		this.session.online = false;

  		this.router.navigate(['/']);
  	}
}
