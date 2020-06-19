import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UtilsService } from '../utils.service';
import { ComplainService } from '../complain.service';

@Component({
  selector: 'app-search-complaint',
  templateUrl: './search-complaint.component.html',
  styleUrls: ['./search-complaint.component.sass']
})
export class SearchComplaintComponent implements OnInit {

	complaints;
	searchForm;

  	constructor(private builder: FormBuilder, private utils: UtilsService, private complainService: ComplainService) { 
  		this.searchForm = this.builder.group({
  			search: ''
  		});
  	}

  	ngOnInit() {}

  	search(data) {

  		if (data.search == "" || data.search == "") {
  			alert("Enter matric Number");
  		}
  		else {
  			this.complainService.searchDomplaints(data).subscribe(res => {
  				if (res.error) {
  					alert(res.errorMessage);
  				}
  				else {
  					this.complaints = res.data;
  				}
  			})
  		}
  	}
}
