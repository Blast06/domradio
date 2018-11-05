import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Emisora } from '../../datos/emisoras.interface';

/**
 * Generated class for the EmisorasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-emisoras',
  templateUrl: 'emisoras.html',
})
export class EmisorasPage {

  number: any;
  title: string;
  emisoras: Observable<any[]>;

  regiones: Observable<any[]>;
  por_frecuencia: Observable<any[]>;
  generos: Observable<any[]>;


  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB:AngularFireDatabase) {

    this.number = navParams.get('number');
    console.log(this.number);

    switch (this.number) {
      case 1:
        this.title = "Generos";
        this.emisoras = afDB.list('generos').valueChanges();
        console.log(this.emisoras);
        break;

      case 2:
        this.title = "Por Region";
        this.emisoras =  afDB.list('regiones').valueChanges();
        console.log(this.emisoras);
        this.emisoras.subscribe( (data) =>{
          console.log(data);
        });
        break;

      case 3:
        this.title = "Por Frecuencia";
        this.emisoras =  afDB.list('frecuencia').valueChanges();
        console.log(this.emisoras);
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


  }

}


