import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SensordetailsPageRoutingModule } from './sensordetails-routing.module';

import { SensordetailsPage } from './sensordetails.page';
import { SharedcomponentModule } from 'src/app/components/sharedcomponent.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SensordetailsPageRoutingModule,
    SharedcomponentModule
  ],
  declarations: [SensordetailsPage]
})
export class SensordetailsPageModule {}
