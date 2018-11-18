import { AppRate } from '@ionic-native/app-rate';
import { CategoriesPage } from './../pages/categories/categories';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, appRate:AppRate) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      appRate.preferences = {
        usesUntilPrompt: 4,
        storeAppURL: {
          android: 'market://details?id=<io.com.domiradio>'
        },
        displayAppName: 'DomiRadio',
        promptAgainForEachNewVersion: true,
        customLocale: {
          title: 'Te gusta %@?',
          message: 'Si es asi, te gustaria calificarla?',
          cancelButtonLabel: 'No, gracias',
          laterButtonLabel: 'Ahora no, mas tarde',
          rateButtonLabel: 'Si, me gustaria',
          appRatePromptTitle: 'Sobre DomiRadio..'
          
        },
        callbacks: {
          onRateDialogShow: function(callback){
            console.log("prueba, rate mostrado", callback);
          },
          onButtonClicked: function(buttonIndex){
            console.log('index del boton: ', buttonIndex);
          }
        }
      }

      appRate.promptForRating(true);
    });
  }
}

