import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeasurementsPage } from './measurements';

@NgModule({
  declarations: [
    MeasurementsPage,
  ],
  imports: [
    IonicPageModule.forChild(MeasurementsPage),
  ],
})
export class MeasurementsPageModule {}
