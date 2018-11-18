import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 export interface about {
   about:string;
   developer:string;
   email:string;
 }


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  aboutRef:AngularFireList<any>
  about:Observable<any[]>;
  informacion:about[] = [];
  generalInfo:Observable<any[]>;
  masapps:Observable<any[]>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afDB:AngularFireDatabase) {

                this.aboutRef = afDB.list('about');
                this.about = this.aboutRef.valueChanges();
                this.about.subscribe( data => this.informacion = data);

                this.generalInfo = afDB.list('informacion').valueChanges();
                this.masapps = afDB.list('informacion/masapps').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
