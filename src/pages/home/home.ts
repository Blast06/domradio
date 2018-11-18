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



  constructor(public navCtrl: NavController, public navPrm: NavParams,
              public afDB: AngularFireDatabase) {
                this.items = afDB.list('regiones').valueChanges();

                this.items.subscribe((data)=>{
                  console.log(data);
                });          

                this.audio.addEventListener("playing", () => this.playing = true, false);
                this.audio.addEventListener("suspend", ()=> console.log("suspendido"));

                /**
                 * TODO
                 * CREAR EL ABOUT
                 * Crear las policies(VER LO DEL GPDR)
                 * CAMBIAR ESTILOS/COLORES A TEXTOS, Y CAMBIAR BACKGROUND EN HOME
                 * VER SI SE PUEDE ENCONTRAR MEJOR .GIF PAR EL HOME.
                 * VER SI SE DEBE AGREGAR SPLASHCREEN
                 * Editar imagenes de radio con la template
                 * Agregar las estaciones con sus imagenes(WIP)
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
