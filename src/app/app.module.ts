


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';


//PAGES
import { EmisorasPage } from './../pages/emisoras/emisoras';
import { AboutPage } from './../pages/about/about';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PoliciesPage } from '../pages/policies/policies';
import { firebaseConfig } from '../config/config';
import { StatusPage } from './../pages/status/status';
import { SpinnerPage } from './../pages/spinner/spinner';
import { CategoriesPage } from './../pages/categories/categories';
import { TabsPage } from './../pages/tabs/tabs';

//PLUGINS
import { AppRate } from '@ionic-native/app-rate';
import { NetworkProvider } from '../providers/network/network';
import { Network } from '@ionic-native/network';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {BackgroundMode} from "@ionic-native/background-mode";
import { HTTP } from '@ionic-native/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EmisorasPage,
    AboutPage,
    PoliciesPage,
    TabsPage,
    CategoriesPage,
    SpinnerPage,
    StatusPage,
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    HomePage,
    EmisorasPage,
    AboutPage,
    PoliciesPage,
    CategoriesPage,
    SpinnerPage,
    StatusPage
    
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    AppRate,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Network,
    HttpClient,
    NetworkProvider,
    InAppBrowser,
    BackgroundMode,
    
    
  ]
})
export class AppModule {}
