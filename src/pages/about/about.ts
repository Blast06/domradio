import { NetworkProvider } from './../../providers/network/network';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


 export interface About {
   about:string;
   developer:string;
   email:string;
   privacypolicy:string;
 }


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  aboutRef:AngularFireList<any>
  about:Observable<any[]>;
  informacion:About[] = [];
  generalInfo:Observable<any[]>;
  masapps:Observable<any[]>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afDB:AngularFireDatabase,
              private inAppBrowser: InAppBrowser,
              public np:NetworkProvider) {

                this.aboutRef = afDB.list('about');
                this.about = this.aboutRef.valueChanges();
                // this.about.subscribe( data => this.informacion = data);
                this.about.subscribe( (data:any) =>{
                  this.informacion = data;
                  console.log(this.informacion);
                })


                this.generalInfo = afDB.list('informacion').valueChanges();
                this.generalInfo.subscribe( data => console.log(data));
                this.masapps = afDB.list('informacion/masapps').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  redirect() {
    let url = this.informacion[3].toString();
    console.log(this.informacion[3]);
    this.inAppBrowser.create(url);
   }
}
