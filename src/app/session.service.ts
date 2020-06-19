import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class SessionService {

    online = false;

  	constructor(private router: Router) { }

  	student(data) {
  		sessionStorage.setItem('studentName', data.name);
  		sessionStorage.setItem('studentEmail', data.email);
  		sessionStorage.setItem('studentMatric', data.matric);

      this.online = true;
  	}

  	getStudent(): any {
  		if (sessionStorage.getItem("studentName") != null 
  			&& sessionStorage.getItem("studentEmail") != null 
  			&& sessionStorage.getItem("studentMatric") != null) {
  			
  			const data = {
  				name: sessionStorage.getItem("studentName"),
  				email: sessionStorage.getItem("studentEmail"),
  				matric: sessionStorage.getItem("studentMatric")
  			}

  			return data;
  		}
  		else {
  			return null;
  		}
  	}

    isStudentOnline() {
      if (this.getStudent() != null) {
          return true;
      }
      else {
        return false;
      }
    }

    getAdmin() {

        if (sessionStorage.getItem("adminName") != null 
        && sessionStorage.getItem("adminEmail") != null) {
        
        const data = {
          name: sessionStorage.getItem("adminName"),
          email: sessionStorage.getItem("adminEmail")}

        return data;
      }
      else {
        return null;
      }
    }

    unsetStudent() {
      sessionStorage.removeItem("studentName");
      sessionStorage.removeItem("studentEmail");
      sessionStorage.removeItem("studentMatric");
    }

    setOnline(val: boolean) {
      this.online = val;
    }

    adminOnline() {

      if (this.getAdmin() != null) {
          return true;
      }
      else {
        return false;
      }
    }

    admin(data) {
      sessionStorage.setItem('adminName', data.name);
      sessionStorage.setItem('adminEmail', data.email);
      sessionStorage.setItem('studentType', data.ytpe);

      this.online = true;
    }

    logoutAdmin() {
      sessionStorage.removeItem("adminName");
      sessionStorage.removeItem("adminEmail");
      sessionStorage.removeItem("adminType");
    }

    loginPRO(data) {
      sessionStorage.setItem('proName', data.name);
      sessionStorage.setItem('proEmail', data.email);
    }

    getPro() {

        if (sessionStorage.getItem("proName") != null 
        && sessionStorage.getItem("proEmail") != null) {
        
        const data = {
          name: sessionStorage.getItem("proName"),
          email: sessionStorage.getItem("proEmail")}

        return data;
      }
      else {
        return null;
      }
    }

    isProOnline() {
      if (this.getPro() != null) {
          return true;
      }
      else {
        return false;
      }
    }

    logoutPro() {
      sessionStorage.removeItem("proName");
      sessionStorage.removeItem("proEmail");
    }

}
