import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { AlertService } from 'src/app/alert.service';
import { APIService, Room, CreateRoomInput, UpdateRoomInput } from 'src/app/API.service';
import { AppdataService } from 'src/app/appdata.service';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-roomdetails',
  templateUrl: './roomdetails.page.html',
  styleUrls: ['./roomdetails.page.scss'],
})
export class RoomdetailsPage implements OnInit {

  operation;
  roomobj: Room;

  constructor(
    private _router: Router,
    public alertService: AlertService,
    public dataService: AppdataService,
    public modalController: ModalController,
    public toastController: ToastController,
    public apiService: APIService,
    public cdr: ChangeDetectorRef
  ) {
    if(!this.dataService.isloggedin){
      this._router.navigate(['/']);
    }
    this.roomobj = {} as Room;
  }

  ngOnInit() {
    console.log('*** chamber details *** HERE IN INIT');
    this.initObject();
  }

  initObject() {
    if (this.dataService.crudpurpose == Constants.CREATE) {
      this.operation = 'Add';
      this.roomobj = {} as Room;
    } else {
      this.operation = 'Edit';
      this.roomobj = <Room>this.dataService.crudobject;

    }
  }

  ionViewWillEnter() {
    this.initObject();
  }

  closeDialog() {
    this._router.navigate(['/dashboard']);
  }

  async editChamber() {
    if (this.validateChamber()) {
      const roomData = {} as UpdateRoomInput;
      roomData.id = this.roomobj.id;
      roomData.sectionID = this.roomobj.sectionID;
      roomData.name = this.roomobj.name;     
      roomData.temperaturemin = this.roomobj.temperaturemin;
      roomData.temperaturemax = this.roomobj.temperaturemax;     
      roomData.numfloors = this.roomobj.numfloors;
      roomData.sensors = this.roomobj.sensors;
      // roomData._version = this.roomobj._version;

      try {
        const ret = await this.apiService.UpdateRoom(roomData);
        this.dataService.updateRoomList(ret, Constants.EDIT);
        this.alertService.displayToast('Room updated successfully', Constants.SUCCESS)
      } catch (err) {
        this.alertService.displayToast('Error updating Room, please try again!', Constants.FAIL);
        return;
      }

      this.closeDialog();
    }

  }

  validateChamber() {

    if (!this.roomobj.name || this.roomobj.name.trim().length == 0) {
      this.alertService.displayToast('Please enter room number', Constants.WARNING);
      return false;
    }

    if (!this.roomobj.sectionID || this.roomobj.sectionID.trim().length == 0) {
      this.alertService.displayToast('Please enter section', Constants.WARNING);
      return false;
    }

    if (!this.roomobj.temperaturemin || this.roomobj.temperaturemin.toString().length == 0) {
      this.alertService.displayToast('Please enter min temperature', Constants.WARNING);
      return false;
    }


    if (!this.roomobj.temperaturemax || this.roomobj.temperaturemax.toString().length == 0) {
      this.alertService.displayToast('Please enter max temperature', Constants.WARNING);
      return false;
    }

    if (!this.roomobj.numfloors || this.roomobj.numfloors.toString().length == 0) {
      this.alertService.displayToast('Please enter number of floors', Constants.WARNING);
      return false;
    }
    this.roomobj.numfloors = 1;

    return true;
  }

  async addChamber() {

    if (this.validateChamber()) {
      const roomData = {} as CreateRoomInput;
      roomData.sectionID = this.roomobj.sectionID;
      roomData.name = this.roomobj.name;      
      roomData.temperaturemin = this.roomobj.temperaturemin;
      roomData.temperaturemax = this.roomobj.temperaturemax;     
      roomData.numfloors = this.roomobj.numfloors;
      roomData.sensors = this.roomobj.sensors;


      try {
        const ret = await this.apiService.CreateRoom(roomData);
        this.dataService.updateRoomList(ret, Constants.CREATE);
        this.alertService.displayToast('Room added successfully', Constants.SUCCESS)

      } catch (err) {
        this.alertService.displayToast('Error adding Room, please try again!', Constants.FAIL);
        return;
      }

      this.closeDialog();

    }

  }

  public save() {
    if (this.dataService.crudpurpose == Constants.CREATE) {
      this.addChamber();
    } else {
      this.editChamber();
    }
  }

}
