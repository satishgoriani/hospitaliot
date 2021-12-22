import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SectordetailsPageRoutingModule } from './sectordetails-routing.module';

import { SectordetailsPage } from './sectordetails.page';
import { SharedcomponentModule } from 'src/app/components/sharedcomponent.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SectordetailsPageRoutingModule,
    SharedcomponentModule
  ],
  declarations: [SectordetailsPage]
})
export class SectordetailsPageModule {}
