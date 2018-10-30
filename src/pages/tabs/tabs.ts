import { HomePage } from './../home/home';
import { AboutPage } from './../about/about';
import { CategoriesPage } from './../categories/categories';
import { EmisorasPage } from './../emisoras/emisoras';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab0Root = HomePage;
  tab1Root = EmisorasPage;
  tab2Root = CategoriesPage;
  tab3Root = AboutPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
