import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/alert.service';
import { APIService, Section, CreateSectionInput, UpdateSectionInput } from 'src/app/API.service';
import { AppdataService } from 'src/app/appdata.service';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-sectordetails',
  templateUrl: './sectordetails.page.html',
  styleUrls: ['./sectordetails.page.scss'],
})
export class SectordetailsPage implements OnInit {

  operation;
  sectorobj: Section;

  constructor(
    private _router: Router,
    public alertService: AlertService,
    public dataService: AppdataService,
    public modalController: ModalController,
    public apiService: APIService
  ) {
    if (!this.dataService.isloggedin) {
      this._router.navigate(['/']);
    }
  }

  ngOnInit() {
    if (this.dataService.crudpurpose == Constants.CREATE) {
      this.operation = 'Add';
      this.sectorobj = {} as Section;
      this.sectorobj.companyID = this.dataService.company.id;

    } else {
      this.operation = 'Edit';
      this.sectorobj = <Section>this.dataService.crudobject;

    }
  }

  checkDuplicate() {
    for (var sector of this.dataService.sectionlist) {
      if (sector.id != this.sectorobj.id && sector.name.trim().toLowerCase() == this.sectorobj.name.trim().toLowerCase()) {
        this.alertService.displayToast('Section name already exists', Constants.WARNING);
        return false;
      }
    }
    return true;
  }

  async editSection() {
    if (this.sectorobj.name && this.sectorobj.name.length > 0) {

      if (!this.checkDuplicate()) return;

      const sectorData = {} as UpdateSectionInput;
      sectorData.id = this.sectorobj.id;
      sectorData.companyID = this.sectorobj.companyID;
      sectorData.name = this.sectorobj.name;
      sectorData._version = this.sectorobj._version;

      try {
        const ret = await this.apiService.UpdateSection(sectorData);
        this.dataService.updateSectionList(ret, Constants.EDIT);
        this.alertService.displayToast('Section updated successfully', Constants.SUCCESS);
      } catch (err) {
        this.alertService.displayToast('Error updating section, please try again!', Constants.FAIL);
        return;
      }
      this.closeDialog();
    } else {
      this.alertService.displayToast('Please enter section name', Constants.WARNING);
    }

  }

  async addSection() {
    if (this.sectorobj.name && this.sectorobj.name.trim().length > 0) {

      if (!this.checkDuplicate()) return;

      const sectorData = {} as CreateSectionInput;
      sectorData.companyID = this.sectorobj.companyID;
      sectorData.name = this.sectorobj.name;

      console.log('Section values' + sectorData);

      try {
        const ret = await this.apiService.CreateSection(sectorData);
        this.dataService.updateSectionList(ret, Constants.CREATE);
        console.log('Section obj' + ret);
        this.alertService.displayToast('Section added successfully', Constants.SUCCESS);
      } catch (err) {
        this.alertService.displayToast('Error adding section, please try again!', Constants.FAIL);
        return;
      }
      this.closeDialog();
    } else {
      this.alertService.displayToast('Please enter section name', Constants.WARNING);
    }

  }

  public save() {
    if (this.dataService.crudpurpose == Constants.CREATE) {
      this.addSection();
    } else {
      this.editSection();
    }
  }

  closeDialog() {
    this.modalController.dismiss();
  }
}
