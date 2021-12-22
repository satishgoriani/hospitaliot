import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SectorsPageRoutingModule } from './sectors-routing.module';

import { SectorsPage } from './sectors.page';
import { SharedcomponentModule } from 'src/app/components/sharedcomponent.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SectorsPageRoutingModule,
    SharedcomponentModule,
    Ng2SearchPipeModule
  ],
  declarations: [SectorsPage]
})
export class SectorsPageModule {}
