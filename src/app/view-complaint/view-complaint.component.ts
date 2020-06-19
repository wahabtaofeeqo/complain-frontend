import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplainService } from '../complain.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-complaint',
  templateUrl: './view-complaint.component.html',
  styleUrls: ['./view-complaint.component.sass']
})

export class ViewComplaintComponent implements OnInit {

    complaintID;
    complaint;
    replyForm;

  	constructor(private activted: ActivatedRoute, private complainService: ComplainService, private builder: FormBuilder) { 
        this.replyForm = this.builder.group({
            subject: '',
            message: '',
            id: ''
        })
  	}

  	ngOnInit() {
  		this.activted.paramMap.subscribe(params => {

          this.complaintID = params.get("id");
  			  this.getComplaint({id: params.get("id")});
  		})
  	}

    getComplaint(data) {

        this.complainService.complaint(data).subscribe(res => {

           console.log(res);
            if (res.error) {
                alert(res.errorMessage);
            }
            else {
                this.complaint = res.data;
            }
        })
    }

    reply(data) {

        const post = {
          id: this.complaintID,
          subject: data.subject,
          message: data.message
        }

        this.complainService.reply(post).subscribe(res => {


            if (res.error) {
                alert(res.errorMessage);
            }
            else {

                this.replyForm.reset();
                alert(res.message);
            }
        })
    }
}
