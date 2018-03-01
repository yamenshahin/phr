import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments'; 


/*
  Generated class for the MeasurementsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MeasurementsProvider {

  api_url = environment.site_url + environment.measurements_url+'/1';

  constructor(public http: HttpClient) {
    console.log('Hello JobProvider Provider');
  }

  getMeasurements() {

  	return this.http.get( this.api_url );
  }

}
