import { NetworkProvider } from './../../providers/network/network';
import { HomePage } from './../home/home';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Emisora } from '../../datos/emisoras.interface';



@Component({
  selector: 'page-emisoras',
  templateUrl: 'emisoras.html',
})
export class EmisorasPage {

  number: any;
  title: string;
  emisoras: Observable<Emisora[]>;

  regiones: Observable<any[]>;
  por_frecuencia: Observable<any[]>;
  generos: Observable<any[]>;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public afDB:AngularFireDatabase,
              public np:NetworkProvider,) {

    this.number = navParams.get('number');
    console.log(this.number);

    switch (this.number) {
      case 1:
        this.title = "Generos";
        this.emisoras = afDB.list('generos').valueChanges();
        break;

      case 2:
        this.title = "Por Region";
        this.emisoras =  afDB.list('regiones').valueChanges();
        this.emisoras.subscribe( (data) =>{
          console.log(data);
        });
        break;

      case 3:
        this.title = "Por Frecuencia";
        this.emisoras =  afDB.list('frecuencia').valueChanges();
        break;

      default:
        break;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmisorasPage');
  }

  enviar(emisora:Emisora){
    console.log(emisora);
    this.navCtrl.push(HomePage, { emisora: emisora });
  }
  

}


