import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { ComplainService } from '../complain.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})

export class AdminComponent implements OnInit {

	complaints;

  	constructor(private router: Router, private complainService: ComplainService, private session: SessionService) { }

  	ngOnInit() {
  		if (!this.session.adminOnline()) {
  			this.router.navigate(['admin-login']);
  		}
  		this.getComplaints();
  	}

  	getComplaints() {
  		this.complainService.complaints().subscribe(res => {
  			if (res.error) {
  				alert(res.errorMessage);
  			}
  			else {
  				this.complaints = res.data;
  			}
  		});
  	}
}
