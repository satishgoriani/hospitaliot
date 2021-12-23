import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/alert.service';
import { APIService } from 'src/app/API.service';
import { AppdataService } from 'src/app/appdata.service';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  siteList: any = [];
  n: number = 1;
  selectedId: any;
  dialogheight;
  defaultsection: any;
  defaultfilter: any;
  curdatetime;

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    console.log('Back button pressed');
    this.modalController.dismiss();
    this.menuCtrl.enable(false);
  }

  /*
  filterlist = [
    { type: "All" }, { type: "Temp-High-alert" }, { type: "Temp-low-alert" }, { type: "Storage-Empty" },
    { type: "Storage < 50% occupied" }, { type: "Storage > 50% occupied" }, { type: "Dairy Products" },
    { type: "Frozen Foods" }, { type: "Grains" },
  ]*/

  filterlist = [
    { type: "All" }, { type: "Temp-high" }, { type: "Temp-low" }, { type: "Humidity-high" },{ type: "Humidity-low" }
  ]


  constructor(
    private _router: Router,
    public dataService: AppdataService,
    public modalController: ModalController,
    public alertController: AlertController,
    public alertService: AlertService,
    public datePipe: DatePipe,
    public menuCtrl: MenuController,
    private apiService: APIService
  ) {
    if(!this.dataService.isloggedin){
      this._router.navigate(['/']);
    }
    this.curdatetime = new Date().getTime();
    this.defaultfilter = this.filterlist[0].type;

  }



  ngOnInit() {
    this.dialogheight = Math.round(window.innerHeight * .9);
    this.menuCtrl.enable(true);

    this.apiService.OnUpdateRoomListener.subscribe({
      next: function(room){
        console.log('ROOM UPDATED *** ' + JSON.stringify(room));
      }
    });
  }

  ionViewWillEnter(){
    console.log('DASHBOARD INIT ** ENTER VIEW**');
    this.segmentChanged();
    this.startRoomPolling();
    this.menuCtrl.enable(true);

  }

  ionViewWillLeave(){
    console.log('|Clearingtimeout')
    clearTimeout(this.refreshTimer);
  }

  async addRoom() {
    this.dataService.crudpurpose = Constants.CREATE;
    this._router.navigate(['/roomdetails']);
  }

  async segmentChanged() {

    if(this.dataService.sectionlist)
      this.defaultsection = this.dataService.sectionlist[0].id;

    /*on dashboard page load first site name value is set as active segment */
    if (!this.dataService.dashboardsectionid) {
      this.dataService.dashboardsectionid = this.defaultsection;
    }
    this.dataService.setDashboardRoomList();

  }
  refreshTimer;

  async startRoomPolling(){
    try{
        console.log('|CHAMBER POLLING|');
        const rooms = await this.apiService.ListRooms();
        if (rooms && rooms.items) {
          for (var room of rooms.items) {
            var curroom = this.dataService.getRoomForId(room.id);
            console.log('Temp ' + curroom.currentavgtem + ' NNN  New temp ' + room.currentavgtem);
            if ( curroom && room.currentavgtem != curroom.currentavgtem) {
                this.dataService.updateRoomList(room, Constants.EDIT);
                this.segmentChanged();
            }
          }
        }

    }catch(err){}

    //if(this.dataService.isuserloggedin)
    this.refreshTimer = setTimeout(()=>{this.startRoomPolling()},10000);
  }

  async viewRoom(room) {
    this.dataService.crudobject = this.dataService.getClone(room);
    this._router.navigate(['/rooms']);
  }

}
