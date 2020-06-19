import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { ComplainService } from '../complain.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})

export class ProfileComponent implements OnInit {

	complaints;

  	constructor(private router: Router, private complainService: ComplainService, private session: SessionService) { }

  	ngOnInit() {
  		if (!this.session.isStudentOnline()) {
  			this.router.navigate(['/']);
  		}
  		else {
  			this.getComplaints();
  		}
  	}

  	getComplaints() {
  		const data = {
  			search: sessionStorage.getItem("studentMatric")
  		}

  		this.complainService.searchDomplaints(data).subscribe(res => {
  			if (res.error) {
  				alert(res.errorMessage);
  			}
  			else {
  				this.complaints = res.data;
  			}
  		})
  	}

  	response(id, event) {

  		event.preventDefault();
  		const data = {
  			id: id
  		}

  		this.complainService.response(data).subscribe(res => {

  			if (res.error) {
  				alert(res.errorMessage);
  			}
  			else {
  				alert(res.data.message);
  			}
  		})
  	}
}
