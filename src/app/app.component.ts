import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate: any;
  constructor() {
    this.sideMenu();
  }

  sideMenu() {
    this.navigate =
      [
        {
          title: "SetUp",
          icon: "business-outline",
          children: [
            {
              title: "Sectors",
              url: "/sectors",
              icon: "grid-outline"
            },
            {
              title: "Sensors",
              url: "/sensors",
              icon: "thermometer-outline"
            },
            {
              title: "Users",
              url: "/users",
              icon: "people-outline"
            },

          ]
        },
        {
          title: "Reports",
          url: "/reports",
          icon: "document-text-outline"
        },
       
        {
          title: "Settings",
          url: "/setting",
          icon: "settings-outline"
        },
        {
          title: "Profile",
          url: "/profile",
          icon: "person-outline"
        },
        {
          title: "About",
          url: "/about",
          icon: "information-circle-outline"
        },
        {
          title: "Logout",
          url: "/",
          icon: "log-out-outline"
        }
      ]
  }
}
