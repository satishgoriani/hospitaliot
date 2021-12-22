import { Injectable } from '@angular/core';
import { APIService, Room, Company, Sensor, Section, User, Usermenu } from './API.service';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {

  sectionlist: Section[];
  userlist: User[];
  usermenulist: Usermenu[];
  roomlist: Room[];
  sensorlist: Sensor[];

  company: Company; //Currently logged in company
  isloggedin;
  crudobject: any;
  crudpurpose;

  dashboardsectionid;
  dashboardroomlist;

  constructor(public apiService: APIService) { }

  updateSensorList(newsensor: Sensor, crudoperation) {
    if (crudoperation == Constants.CREATE) {
      this.sensorlist.push(newsensor);
    } else if (crudoperation == Constants.EDIT) {
      for (let i = 0; i < this.sensorlist.length; i++) {
        if (this.sensorlist[i].id === newsensor.id) {
          this.sensorlist[i] = newsensor;
          return;
        }
      }
    } else if (crudoperation == Constants.DELETE) {
      //code for delete
      for (let i = 0; i < this.sensorlist.length; i++) {
        if (this.sensorlist[i].id === newsensor.id) {
          this.sensorlist.splice(i, 1);
          return;
        }
      }
    }

    this.sensorlist.sort((a: Sensor, b: Sensor) => (a.serialnumber) < (b.serialnumber) ? -1 : 1);

  }

  updateSectionList(newsite: Section, crudoperation) {
    if (crudoperation == Constants.CREATE) {
      this.sectionlist.push(newsite);
    } else if (crudoperation == Constants.EDIT) {
      for (let i = 0; i < this.sectionlist.length; i++) {
        if (this.sectionlist[i].id === newsite.id) {
          this.sectionlist[i] = newsite;
          return;
        }
      }
    } else if (crudoperation == Constants.DELETE) {
      //code for delete
      for (let i = 0; i < this.sectionlist.length; i++) {
        if (this.sectionlist[i].id === newsite.id) {
          this.sectionlist.splice(i, 1);
          return;
        }
      }
    }
    this.sectionlist.sort((a: Section, b: Section) => (a.name) < (b.name) ? -1 : 1);

  }

  getRoomForId(roomid) {
    for (var room of this.roomlist) {
      if (room.id == roomid) return room;
    }
    return null;
  }

  setDashboardRoomList() {
    this.dashboardroomlist = [];
    for (var room of this.roomlist) {
      if (room.sectionID == this.dashboardsectionid) this.dashboardroomlist.push(room);
    }

    this.dashboardroomlist.sort((a: Room, b: Room) => (a.name) < (b.name) ? -1 : 1);
    this.dashboardroomlist = [... this.dashboardroomlist];



  }

  updateRoomList(newroom: Room, crudoperation) {
    newroom.sectionname = this.getSectionName(newroom.sectionID);
    //newroom.categoryname = this.getMaterialCategoryNameForId(newroom.materialcategoryID);

    this.setSensorString(newroom);

    if (crudoperation == Constants.CREATE) {
      this.roomlist.push(newroom);
    } else if (crudoperation == Constants.EDIT) {
      for (let i = 0; i < this.roomlist.length; i++) {
        if (this.roomlist[i].id === newroom.id) {
          this.roomlist[i] = newroom;
          return;
        }
      }
    } else if (crudoperation == Constants.DELETE) {
      //code for delete
      for (let i = 0; i < this.roomlist.length; i++) {
        if (this.roomlist[i].id === newroom.id) {
          this.roomlist.splice(i, 1);
          return;
        }
      }
    }

    this.setDashboardRoomList();

  }

  updateUserList(newuser: User, crudoperation) {
    if (newuser.sectionID == '0') newuser.sectionname = 'All Sites';
    else newuser.sectionname = this.getSectionName(newuser.sectionID);

    this.setMenuNameString(newuser);


    if (crudoperation == Constants.CREATE) {
      this.userlist.push(newuser);
    } else if (crudoperation == Constants.EDIT) {
      for (let i = 0; i < this.userlist.length; i++) {
        if (this.userlist[i].id === newuser.id) {
          this.userlist[i] = newuser;
          return;
        }
      }
    } else if (crudoperation == Constants.DELETE) {
      //code for delete
      for (let i = 0; i < this.userlist.length; i++) {
        if (this.userlist[i].id === newuser.id) {
          this.userlist.splice(i, 1);
          return;
        }
      }
    }
  }

  async initSections() {
    this.sectionlist = [];

    const sections = await this.apiService.ListSections();

    /****** _deleted doeas not exist */

    // if (sections && sections.items) {
    //   for (var section of sections.items) {
    //     if (!section._deleted) { 
    //       this.sectionlist.push(section);
    //     }
    //   }
    // }

    this.sectionlist.sort((a: Section, b: Section) => (a.name) < (b.name) ? -1 : 1);

  }

  setSensorString(room: Room) {
    console.log('SENSORS **' + JSON.stringify(room.sensors));
    if (room.sensors && room.sensors.length > 0) {
      var sensorstring = "";
      for (var sensor of room.sensors) {

        sensorstring = sensorstring + this.getSensorSerial(sensor) + ", ";
      }

      if (sensorstring.length > 2)
        sensorstring = sensorstring.substring(0, sensorstring.length - 2);
      room.sensorsasstring = sensorstring;

    }
  }

  setMenuNameString(user: User) {
    if (user.assignedmenuoptions && user.assignedmenuoptions.length > 0) {
      var menunameasstring = "";
      for (var opt of user.assignedmenuoptions) {
        menunameasstring = menunameasstring + this.getMenuName(opt) + ", ";
      }

      if (menunameasstring.length > 2)
        menunameasstring = menunameasstring.substring(0, menunameasstring.length - 2);
      user.menunamestring = menunameasstring;
    }
  }

  getMenuName(menuCode) {
    for (let i = 0; i < this.usermenulist.length; i++) {
      if (this.usermenulist[i].menucode === menuCode) {
        return this.usermenulist[i].name;
      }
    }
  }

  getSensorSerial(sensorid) {
    for (var sensor of this.sensorlist) {
      if (sensor.id == sensorid) return sensor.serialnumber;
    }
    return "";

  }

  getSectionName(sectionId) {
    if (sectionId === "0")
      return "All";

    for (let i = 0; i < this.sectionlist.length; i++) {
      if (this.sectionlist[i].id === sectionId) {
        return this.sectionlist[i].name;
      }
    }
  }

  getMaskedPassword(strpass) {
    var maskedPassword = "";
    for (let i = 0; i < strpass.length; i++) {
        maskedPassword = maskedPassword + "*";
    }
    return maskedPassword;
  }

  async initUsers() {
    this.userlist = [];

    const users = await this.apiService.ListUsers();
    if (users && users.items) {
      for (var user of users.items) {
        // if (!user._deleted) {
        //   if(user.sectionID == '0') user.sectionname = 'All Sites';
        //   else user.sectionname = this.getSectionName(user.sectionID);

        //   this.setMenuNameString(user);
        //   console.log('NAMESTRING ' + user.menunamestring);
        //   this.userlist.push(user);
        // }
      }
    }

    this.userlist.sort((a:User, b: User)=> (a.firstname)  < (b.firstname)  ? -1 : 1 );

  }

  async initUserMenus() {
    this.usermenulist = [];

    const usermenus = await this.apiService.ListUsermenus();
    // if (usermenus && usermenus.items) {
    //   for (var usermenu of usermenus.items) {
    //     if (!usermenu._deleted) {
    //       this.usermenulist.push(usermenu);
    //     }
    //   }
    // }
  }


  async initRooms() {
    this.roomlist = [];

    const rooms = await this.apiService.ListRooms();
    if (rooms && rooms.items) {
      for (var room of rooms.items) {
        // if (!room._deleted) {          
        //   room.sectionname = this.getSectionName(room.sectionID);
        //   this.setSensorString(room);
        //   this.roomlist.push(room);
        // }
      }
    }

  }

  async initSensors() {
    this.sensorlist = [];

    const sensors = await this.apiService.ListSensors();
    if (sensors && sensors.items) {
      // for (var sensor of sensors.items) {
      //   if (!sensor._deleted) {

      //     this.sensorlist.push(sensor);
      //   }
      // }
    }

  }

  
  async initAppData(){
    try{
      await this.initSections();
      
      await this.initUserMenus();

      await this.initUsers();
      await this.initSensors();
      
      await this.initRooms();
      return true;
    } catch (err) {
      console.log('Error ' + JSON.stringify(err));
      return false;
    }
  }

  getClone(object) {
    return JSON.parse(JSON.stringify(object));
  }

  clearTimer() {

  }

}
