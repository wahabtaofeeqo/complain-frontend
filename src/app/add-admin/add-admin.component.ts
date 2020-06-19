import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UtilsService } from '../utils.service';
import { ComplainService } from '../complain.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.sass']
})

export class AddAdminComponent implements OnInit {

	adminForm;
	schools;
	departments;

  	constructor(private builder: FormBuilder, private utils: UtilsService, private complainService: ComplainService) { 
  		this.adminForm = this.builder.group({
  			name: '',
  			password: '',
  			email: '',
  			phone: '',
  			type: '',
  			department: ''

  		})
  	}

  	ngOnInit() {}

  	populate(type) {
  		if (type == "pro") {
  			this.departments = this.utils.getDepartments();
  		}
  		else {
  			this.departments = null;
  		}
  	}

    addAdmin(data) {

    	this.complainService.admin(data).subscribe(res => {
            if (res.error) {
                alert(res.errorMessage);
            }
            else {

                this.adminForm.reset();
                alert(res.message);
            }
        })
    }
}
