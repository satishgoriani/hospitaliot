import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SensorsPageRoutingModule } from './sensors-routing.module';

import { SensorsPage } from './sensors.page';
import { SharedcomponentModule } from 'src/app/components/sharedcomponent.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SensorsPageRoutingModule,
    SharedcomponentModule,
    Ng2SearchPipeModule
  ],
  declarations: [SensorsPage]
})
export class SensorsPageModule {}
