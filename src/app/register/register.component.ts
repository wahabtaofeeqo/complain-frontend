import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UtilsService } from '../utils.service';
import { ComplainService } from '../complain.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})


export class RegisterComponent implements OnInit {

	  createForm;
    values: boolean = false;
    departments;

  	constructor(private builder: FormBuilder, private utils: UtilsService, private complainService: ComplainService) { 

  		this.createForm = this.builder.group({
          name: '',
          email: '',
          matric: '',
          school: '',
          department: '',
          password: '',
          phone: '',
          level: ''
  		});
  	}

  	ngOnInit() {
    }


    populate(val) {

        if (val != "") {
            this.departments = this.utils.getDepartment(val);
        }
    }

    register(data) {

        this.complainService.register(data).subscribe(res => {

            console.log(res);

            if (res.error) {
                alert(res.errorMessage);
            }
            else {
              alert("Account Created Successfully");
            }
        });

        console.log(data);
    }
}
