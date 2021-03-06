import { NetworkProvider } from './../../providers/network/network';
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
  playing:boolean = false;

  emisora: Emisora = {
    nombre: EMISORAS[9].nombre,
    url: EMISORAS[9].url
  };


  audio = new Audio();
  audio_tag = document.getElementById("myVideo");

  state: boolean = true;



  constructor(public navCtrl: NavController, 
              public navPrm: NavParams,
              public afDB: AngularFireDatabase,
              public np:NetworkProvider,) {
                this.items = afDB.list('regiones').valueChanges();

                this.items.subscribe((data)=>{
                  console.log(data);
                });          

                this.audio.addEventListener("playing", () => this.playing = true, false);
                this.audio.addEventListener("suspend", ()=> console.log("suspendido"));

                /**
                 * TODO
                 * 
                 * Integrate Lazy Loading
                 * Integrate GPDR
                 * Fix app rate that appears twice- FIXED
                 * fix splashscreen(does not appear)
                 * Terminar de agregar todas las estaciones
                 * Fix footer height
                 * put a warning when there's no connection
                 * fix background app process
                 */

    if (navPrm.get('emisora')) {
      this.emisora = navPrm.get('emisora');
    }

  }

  ionViewWillLeave() {
    console.log("ionviewwillleave");
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  change_state(){
    this.playing = false;
    console.log(this.playing);
  }

  ionViewWillEnter() {
    this.audio.src = this.emisora.url;
    this.audio.load();
    this.audio.play();
  }

  loading(){ 
    this.audio_tag.addEventListener("progress", function(){
     console.log("Buscando...");

    });
  }


  press(estado) {

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
