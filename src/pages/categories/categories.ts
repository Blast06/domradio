import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from '@angular/fire/database';
import { HomePage } from './../home/home';
import { EMISORAS } from '../../datos/emisoras.data';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Emisora } from '../../datos/emisoras.interface';
import { EmisorasPage } from '../emisoras/emisoras';



@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {


  latina;

  emisoras:Emisora[] = [];
  regiones: Observable<any[]>;
  por_frecuencia: Observable<any[]>;
  genero: Observable<any[]>;
  



  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB:AngularFireDatabase) {
    this.regiones = afDB.list('regiones').valueChanges();

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

  see_more(number){
    this.navCtrl.push(EmisorasPage, {number: number})

  }

}
