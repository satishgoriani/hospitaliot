import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomdetailsPageRoutingModule } from './roomdetails-routing.module';

import { RoomdetailsPage } from './roomdetails.page';
import { SharedcomponentModule } from 'src/app/components/sharedcomponent.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomdetailsPageRoutingModule,
    SharedcomponentModule
  ],
  declarations: [RoomdetailsPage]
})
export class RoomdetailsPageModule {}
