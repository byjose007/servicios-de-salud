import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'fa fa-home'
    },
    {
      title: 'Farmacias',
      url: '/list',
      icon: 'fas fa-clinic-medical'
    },
    {
      title: 'Consejos',
      url: '/list',
      icon: 'fa fa-heartbeat'
    },
    {
      title: 'Centros de Salud',
      url: '/list',
      icon: 'fa fa-hospital'
    },
    {
      title: 'Laboratorios',
      url: '/list',
      icon: 'fas fa-flask'
    },
    {
      title: 'Campañas',
      url: '/list',
      icon: 'fas fa-syringe'
    },
    {
      title: 'Consultas',
      url: '/list',
      icon: 'fas fa-comment-medical'
    },
    {
      title: 'Pedidos',
      url: '/list',
      icon: 'fas fa-pills'
    },
    
    {
      title: 'Salir',
      url: '/list',
      icon: 'fa fa-power-off'
    },

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
