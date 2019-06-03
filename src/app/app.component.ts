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
import { BackgroundMode } from '@ionic-native/background-mode';
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
              public networkProvider: NetworkProvider,
              public backgroundMode: BackgroundMode,) {
      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      statusBar.styleLightContent();
      splashScreen.hide();

      this.backgroundMode.enable();

      //inicializo el evento ubicado en el networkProvider
      this.networkProvider.initializeNetworkEvents();

      // Offline event
      this.events.subscribe('network:offline', () => {
        // alert('network:offline ==> '+this.network.type);  
        networkProvider.online = false; 
        console.log("en evento appcomponent");
         
    });

    // Online event
    this.events.subscribe('network:online', () => {
        // alert('network:online ==> '+this.network.type);    
        networkProvider.online = true;  
        console.log("en evento appcomponent");
    });
      
    
      //Timer para el splashscreen
      timer(3000).subscribe( () => this.showSplash = false);

      appRate.preferences = {
        displayAppName: 'DomiRadio',
        usesUntilPrompt: 3,
        promptAgainForEachNewVersion: false,
        storeAppURL: {
          android: 'market://details?id=io.com.domiradio',
        },
        customLocale: {
          title: "Te gustaria calificar %@?",
          message: "No tomara mas de un minuto, ayudanos con tu calificacion. Gracias por tu soporte!",
          cancelButtonLabel: "No, Gracias",
          laterButtonLabel: "Mas tarde",
          rateButtonLabel: "Ahora mismo",
          yesButtonLabel: "Si!",
          noButtonLabel: "Ahora no",
          appRatePromptTitle: 'Te gusta %@'
        },
        callbacks: {
          handleNegativeFeedback: function(){
            window.open('mailto:feedback@example.com','_system');
          },
          onRateDialogShow: function(callback){
            callback(1) // cause immediate click on 'Rate Now' button
          },
          onButtonClicked: function(buttonIndex){
            console.log("onButtonClicked -> " + buttonIndex);
          }
        }
      };
      
      appRate.promptForRating(true);

    });
  
  }
}
