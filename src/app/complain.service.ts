import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpParams, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Complain } from './complain';

@Injectable({
  providedIn: 'root'
})

export class ComplainService {

	baseURL = "http://localhost/conplain";

  	constructor(private client: HttpClient, private httpHandler: HttpHandler, private router: Router) { 

  	}

  	sendComplain(data): Observable<any> {
  		const httpOptions = {
			  headers: new HttpHeaders({
			    'Content-Type':  'application/x-www-form-urlencoded'
			  })
			};

		return this.client.post<any>(`${this.baseURL}/complain`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
  	}

  	private handler(error: HttpErrorResponse) {
		console.log(error);

		console.log(error.message);
		return throwError("Error!");
	}

	login(data): Observable<any> {

		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/login`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}

	adminLogin(data): Observable<any> {

		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/admin`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}

	register(data): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/register`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}

	public complaints(): Observable<any> {
		return this.client.get<any>(`${this.baseURL}/complaints`).pipe(catchError(this.handler));
	}

	complaint(complainID): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/complaint`, {data: complainID}, httpOptions)
		.pipe(catchError(this.handler));
	}

	reply(data): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/reply`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}

	response(data): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/response`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}

	admin(data): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/addAdmin`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}

	public admins(): Observable<any> {
		return this.client.get<any>(`${this.baseURL}/admins`).pipe(catchError(this.handler));
	}

	students(data): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/students`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}

	deptDomplaints(data): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/dept-complaints`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}

	searchDomplaints(data): Observable<any> {
		const httpOptions = {
			  	headers: new HttpHeaders({
			    	'Content-Type':  'application/x-www-form-urlencoded'
			  	})
			};

		return this.client.post<any>(`${this.baseURL}/search-complaints`, {data: data}, httpOptions)
		.pipe(catchError(this.handler));
	}
}
