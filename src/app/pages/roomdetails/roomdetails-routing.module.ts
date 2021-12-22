import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomdetailsPage } from './roomdetails.page';

const routes: Routes = [
  {
    path: '',
    component: RoomdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomdetailsPageRoutingModule {}
