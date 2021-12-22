import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../alert.service';
import { APIService, CompanyByEmailQuery } from '../../API.service';
import {Router} from '@angular/router';	
import { AppdataService } from '../../appdata.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  type: boolean = true;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  uname; 
  userpass; 
  isprocessing; 

  constructor(
    public alertService : AlertService,
    public apiService : APIService,
    public dataService : AppdataService,
    private _router : Router
  ) { }

  ngOnInit() {
    this.uname = 'nanavati@gmail.com';
    this.userpass = 'nanavati$123##';
  }

  ionViewDidEnter(){
    this.dataService.isloggedin = false; 

  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  async login(){
    if(!this.uname || this.uname.trim().length == 0 ){
      this.alertService.showError('Please provide valid username!');
      return; 
    }

    if(!this.userpass || this.userpass.trim().length == 0 ){
      this.alertService.showError('Password must be atleast 6 characters!');
      return; 
    }
    
    this.isprocessing = true;
    try{
          const ret = await this.apiService.CompanyByEmail(this.uname);
          if(ret && ret.items && ret.items.length > 0){
            const company = ret.items[0];
            if(company.adminpass === this.userpass){
              console.log('COMPANY OBTAINED : ' + JSON.stringify(company));
              
              //Initialize app data
              const initdata = await this.dataService.initAppData();
              if(initdata){
                  
                  this.dataService.company = company;   
                  this.dataService.isloggedin = true;
                  this.isprocessing = false;
          
                  this._router.navigate(['/dashboard']);
              }else{
                  this.alertService.showError('Error initializing data, please try again!');  
              }
            }else{
              this.alertService.showError('Invalid credentials, please try again!');
            }
          }else{
            this.alertService.showError('Login failed, please try again!');
         }
    }catch(err){
      this.alertService.showError('Error, please try again!');
    }
    this.isprocessing = false; 

  }
}
