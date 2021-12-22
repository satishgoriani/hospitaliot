import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolatoolbarComponent } from './holatoolbar/holatoolbar.component';
import { HolamodalbarComponent } from './holamodalbar/holamodalbar.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [HolatoolbarComponent, HolamodalbarComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HolatoolbarComponent,HolamodalbarComponent]
})
export class SharedcomponentModule { }
