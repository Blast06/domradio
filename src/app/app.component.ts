import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//Pages
import { CategoriesPage } from './../pages/categories/categories';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

//PLUGINS
import { AppRate } from '@ionic-native/app-rate';
import { Network } from '@ionic-native/network';


import { NetworkProvider } from '../providers/network/network';
import { timer } from 'rxjs/observable/timer';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  showSplash = true;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen, 
              appRate:AppRate,
              public network: Network,
              public events: Events,
              public networkProvider: NetworkProvider) {
      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.networkProvider.initializeNetworkEvents();

      // Offline event
      this.events.subscribe('network:offline', () => {
        alert('network:offline ==> '+this.network.type);    
    });

    // Online event
    this.events.subscribe('network:online', () => {
        alert('network:online ==> '+this.network.type);        
    });
      
    
  

      //Timer para el splashscreen
      timer(2000).subscribe( () => this.showSplash = false);

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
