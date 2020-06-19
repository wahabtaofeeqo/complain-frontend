import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { ComplainService } from '../complain.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.sass']
})
export class AdminsComponent implements OnInit {

	admins;

  	constructor(private router: Router, private complainService: ComplainService, private session: SessionService) { }

  	ngOnInit() {
  		if (!this.session.adminOnline()) {
  			this.router.navigate(['admin-login']);
  		}

  		this.getAdmins();
  	}

  	getAdmins() {
  		this.complainService.admins().subscribe(res => {
  			if (res.error) {
  				alert(res.errorMessage);
  			}
  			else {
  				this.admins = res.data;
  			}
  		})
  	}
}
