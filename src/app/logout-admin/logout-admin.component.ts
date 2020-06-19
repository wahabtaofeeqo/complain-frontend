import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-logout-admin',
  templateUrl: './logout-admin.component.html',
  styleUrls: ['./logout-admin.component.sass']
})
export class LogoutAdminComponent implements OnInit {

  	constructor(private router: Router, private session: SessionService) { }

  	ngOnInit() {
  		this.logout();
  	}

  	logout() {
  		this.session.logoutAdmin();
  		this.router.navigate(['/']);
  	}

}
