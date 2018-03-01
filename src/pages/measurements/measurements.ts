import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeasurementsProvider } from '../../providers/measurements/measurements';

/**
 * Generated class for the MeasurementsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-measurements',
  templateUrl: 'measurements.html',
})
export class MeasurementsPage {
  measurements;
  constructor(public navCtrl: NavController, public navParams: NavParams, private measurementsProvider: MeasurementsProvider) {
  	this.measurementsProvider.getMeasurements().subscribe( data=>{
    	console.log(data);
    	this.measurements = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeasurementsPage');
  }
  goTo(measurement) {
    console.log(measurement);
    this.navCtrl.push('MeasurementDetailPage', {measurement: measurement});
    console.log()

  }
}
