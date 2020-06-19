import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})

export class NavbarComponent implements OnInit {

	private online: boolean = false;

  	constructor(private session: SessionService) { }

  	ngOnInit() {

        if (this.session.getStudent() != null) {
        	this.online = true;
        }
        else {
        	this.online = false;
        }
  	}
}
