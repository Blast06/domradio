import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EMISORAS } from '../../datos/emisoras';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  emisora = EMISORAS.splice(4);

  constructor(public navCtrl: NavController, public navPrm:NavParams) {

    console.log(navPrm.get('emisora'));
    

  }

}
