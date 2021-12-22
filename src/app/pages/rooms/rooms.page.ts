import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { AlertService } from 'src/app/alert.service';
import { APIService, Room } from 'src/app/API.service';
import { AppdataService } from 'src/app/appdata.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {

  select = {
    option:null
 }; 
  roomobj: Room;
  dialogheight;

  constructor(
    private _router: Router,
    public alertService: AlertService,
    public dataService: AppdataService,
    public modalController: ModalController,
    public toastController: ToastController,
    public apiService: APIService
  ) { 
    console.log('ROOM INIT');
    this.select.option = "today";
    this.roomobj = <Room>this.dataService.crudobject;
    this.dialogheight = Math.round(window.innerHeight * 0.9);
    
  }

  ngOnInit() {
  }

}
