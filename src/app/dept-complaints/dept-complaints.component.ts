import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { ComplainService } from '../complain.service';

@Component({
  selector: 'app-dept-complaints',
  templateUrl: './dept-complaints.component.html',
  styleUrls: ['./dept-complaints.component.sass']
})

export class DeptComplaintsComponent implements OnInit {

	complaints;

  	constructor(private router: Router, private complainService: ComplainService, private session: SessionService) { }

  	ngOnInit() {
  		this.isPRO();
  	}

  	isPRO() {
  		if (this.session.isProOnline()) {
  			this.getComplaints();
  		}
  		else {
  			this.router.navigate(['/']);
  		}
  	}

  	getComplaints() {
  		const data = {
  			email: sessionStorage.getItem('proEmail')
  		}

  		this.complainService.deptDomplaints(data).subscribe(res => {

  			console.log(res);
  			if (res.error) {
  				alert(res.errorMessage);
  			}
  			else {
  				this.complaints = res.data;
  			}
  		})
  	}
}
