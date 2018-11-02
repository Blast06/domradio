import { HomePage } from './../home/home';
import { EMISORAS } from './../../datos/emisoras';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Emisora } from '../../datos/emisoras.interface';



@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  // emisoras = EMISORAS.splice(0);

  latina;

  emisoras:Emisora[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //asi me crea un clon, si lo pongo sin el splice, seria el mismo objeto 
    //y afectaria las operaciones CRUD del mismo
    this.emisoras = EMISORAS.slice(0);
    this.latina = this.emisoras[0].url;

    
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  enviar(emisora){

    // console.log(emisora);
    
    this.navCtrl.push(HomePage, {emisora:emisora});
  }

}
