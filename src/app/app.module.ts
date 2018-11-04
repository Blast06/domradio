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

export const firebaseConfig = {
  apiKey: "AIzaSyDv3b5kXs3WMhQfhjqRPHfVLAnIflonac0",
  authDomain: "domradio-a03e0.firebaseapp.com",
  databaseURL: "https://domradio-a03e0.firebaseio.com",
  projectId: "domradio-a03e0",
  storageBucket: "domradio-a03e0.appspot.com",
  messagingSenderId: "403466093476"
};


//PAGES
import { EmisorasPage } from './../pages/emisoras/emisoras';
import { AboutPage } from './../pages/about/about';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PoliciesPage } from '../pages/policies/policies';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EmisorasPage,
    AboutPage,
    PoliciesPage,
    TabsPage,
    CategoriesPage,

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
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
