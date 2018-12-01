import { SpinnerPage } from './../pages/spinner/spinner';
import { CategoriesPage } from './../pages/categories/categories';
import { TabsPage } from './../pages/tabs/tabs';
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

//PLUGINS
import { AppRate } from '@ionic-native/app-rate';
import { NetworkProvider } from '../providers/network/network';



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
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
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
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    AppRate,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NetworkProvider
  ]
})
export class AppModule {}
