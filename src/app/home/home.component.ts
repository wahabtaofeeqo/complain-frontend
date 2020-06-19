import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ComplainService } from '../complain.service';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

	complainForm;
	email;

  	constructor(private builder: FormBuilder, private complainService: ComplainService, private router: Router, private session: SessionService) { 
  		this.complainForm = this.builder.group({
  			subject: '',
  			message: ''
  		});
  	}

  	ngOnInit() {
  		this.email = sessionStorage.getItem("studentEmail");
  	}

  	sendComplain(data) {
  		data = {
  			email: this.email,
  			subject: data.subject,
  			message: data.message
  		};

     
      
      if (this.email != null) {
          
          this.complainService.sendComplain(data).subscribe(res => {
              if (res.error) {
                  alert(res.errorMessage);
              }
              else {

                  this.complainForm.reset();
                  alert("Your complain has been delivered");
              }
          })
       }
       else {
         alert("You must login to perform this action");
       }
  	}

}
