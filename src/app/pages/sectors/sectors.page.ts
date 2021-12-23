import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/alert.service';
import { APIService, Section, DeleteSectionInput } from 'src/app/API.service';
import { AppdataService } from 'src/app/appdata.service';
import { Constants } from '../../constants';
import { SectordetailsPage } from '../../modals/sectordetails/sectordetails.page';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.page.html',
  styleUrls: ['./sectors.page.scss'],
})
export class SectorsPage implements OnInit {

  secobj : Section;
  strsearch = '';
  constructor(
    private _router : Router,
    public dataService : AppdataService,
    public modalController: ModalController,
    public alertController: AlertController,
    public alertService : AlertService,
    private apiService: APIService
  ) {if(!this.dataService.isloggedin){
    this._router.navigate(['/']);
  } }

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    this.modalController.dismiss();
  }

  dialogheight;

  ngOnInit() {
    this.dialogheight = Math.round(window.innerHeight * 0.4);
  }

  async openForm(){
    let root = document.documentElement;
    root.style.setProperty('--crud-form-height', this.dialogheight + 'px');
    //console.log('Dialog height ' + this.dialogheight);

    const modal = await this.modalController.create({
      component: SectordetailsPage,
      cssClass: 'crud-form-wrapper',
      swipeToClose: true,
      backdropDismiss: true,
  });
  return await modal.present();
}

async addSector(){
  this.dataService.crudpurpose = Constants.CREATE;
  this.openForm();
}

async editSector(sector){
  this.dataService.crudpurpose = Constants.EDIT;
  this.dataService.crudobject = this.dataService.getClone(sector);
  this.openForm();
}

async confirmDelete(sector){
  this.secobj = {} as Section;
  this.secobj = <Section> this.dataService.getClone(sector);

  const headerstr = 'Delete Section';
  const messagestr = 'Do you want to delete section: ' + this.secobj.name + '?';

  const isconfirmed = await this.alertService.confirmDelete(headerstr,messagestr);
  if (isconfirmed){
    //console.log('Deleting Section...');
    this.deleteSector();
  }
}

async deleteSector(){
  if(this.secobj.id && this.secobj.id.length > 0){
      const sectorData = {} as DeleteSectionInput;
      sectorData.id = this.secobj.id;
      //sectorData._version = this.secobj._version;


      try{
        const ret = await this.apiService.DeleteSection(sectorData);
        //console.log('Inside try-->', ret);
        this.dataService.updateSectionList(ret,Constants.DELETE);
        this.alertService.displayToast('Section deleted successfully',Constants.SUCCESS)
      }catch(err){
        this.alertService.displayToast('Error deleting the Section, please try again!',Constants.FAIL);
        return;
      }
  }else{
    console.log('Invalid Section id...');
  }
}

}
