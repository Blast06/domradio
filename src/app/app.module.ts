import { CategoriesPage } from './../pages/categories/categories';
import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


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
    IonicModule.forRoot(MyApp)
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
