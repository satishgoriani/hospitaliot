import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'sectors',
    loadChildren: () => import('./pages/sectors/sectors.module').then( m => m.SectorsPageModule)
  },
  {
    path: 'sectordetails',
    loadChildren: () => import('./modals/sectordetails/sectordetails.module').then( m => m.SectordetailsPageModule)
  },
  {
    path: 'sensors',
    loadChildren: () => import('./pages/sensors/sensors.module').then( m => m.SensorsPageModule)
  },
  {
    path: 'sensordetails',
    loadChildren: () => import('./modals/sensordetails/sensordetails.module').then( m => m.SensordetailsPageModule)
  },
  {
    path: 'rooms',
    loadChildren: () => import('./pages/rooms/rooms.module').then( m => m.RoomsPageModule)
  },
  {
    path: 'roomdetails',
    loadChildren: () => import('./pages/roomdetails/roomdetails.module').then( m => m.RoomdetailsPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
