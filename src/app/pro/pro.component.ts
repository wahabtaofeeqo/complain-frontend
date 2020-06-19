import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { ComplainService } from '../complain.service';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.sass']
})

export class ProComponent implements OnInit {

	students;

  	constructor(private router: Router, private complainService: ComplainService, private session: SessionService) { }

  	ngOnInit() {
  		this.isPRO();
  	}

  	isPRO() {
  		if (this.session.isProOnline()) {
  			this.getStudents();
  		}
  		else {
  			this.router.navigate(['/']);
  		}
  	}

  	getStudents() {
  		const data = {
  			email: sessionStorage.getItem("proEmail")
  		}

  		this.complainService.students(data).subscribe(res => {
  			if (res.error) {
  				alert(res.errorMessage);
  			}
  			else {
  				this.students = res.data;
  			}
  		})
  	}
}
