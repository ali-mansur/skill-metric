import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';


@Injectable()

export class UserListServiceService {
  constructor(private _http: Http) { }
  getProfileData(){
  	//return this._http.get('/app/dummy-data/dummy-data.json').map(res => res.json());
 	//fetch('/app/dummy-data/dummy-data.json').then((response) => {
	//return response.json();
	// });

	return this._http.get('/app/dummy-data/dummy-data.json').toPromise().then(res => res.json());

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
