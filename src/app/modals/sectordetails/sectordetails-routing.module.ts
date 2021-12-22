import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectordetailsPage } from './sectordetails.page';

const routes: Routes = [
  {
    path: '',
    component: SectordetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectordetailsPageRoutingModule {}
