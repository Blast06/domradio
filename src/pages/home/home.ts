import { AngularFireDatabase } from '@angular/fire/database';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EMISORAS } from '../../datos/emisoras.data';
import { Emisora } from '../../datos/emisoras.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Observable<any[]>;

  emisora: Emisora = {
    nombre: EMISORAS[9].nombre,
    url: EMISORAS[9].url
  };


  audio = new Audio();

  state: boolean = true;




  constructor(public navCtrl: NavController, public navPrm: NavParams,
              public afDB: AngularFireDatabase) {
                this.items = afDB.list('regiones').valueChanges();

                this.items.subscribe((data)=>{
                  console.log(data);
                })




    // console.log(navPrm.get('emisora'));
    if (navPrm.get('emisora')) {
      this.emisora = navPrm.get('emisora');
    }

    console.log("EMISORA EN CONSTRUCTOR HOME: ", this.emisora.nombre);

  }

  ionViewWillLeave() {
    console.log("ionviewwillleave");
    this.audio.pause();
    this.audio.currentTime = 0;

  }

  ionViewWillEnter() {
    this.audio.src = this.emisora.url;
    this.audio.load();
    this.audio.play();
    console.log("readyState: ", this.audio.readyState);
    if (this.audio.readyState > 0) {
      console.log(this.audio.readyState);

    }
    if (this.audio.onplaying) {
      console.log(this.audio.onplaying);

    }

  }

  press(estado) {

    console.log("antes de entrar a las condiciones: ", estado);

    if (estado) {
      this.audio.pause();
      console.log("estado en if: ", this.state);
      this.state = !estado;

    } else {
      this.audio.play();
      console.log("estado en else: ", this.state);
      this.state = !estado;

    }

  }



}
