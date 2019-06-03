import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { AlertController, Events } from 'ionic-angular';
import { Network } from '@ionic-native/network';

export enum ConnectionStatusEnum {
  Online,
  Offline
}

@Injectable()
export class NetworkProvider {

  online:boolean = true;

  previousStatus;

  constructor(public http: HttpClient,
              public alertCtrl: AlertController,
              public network: Network,
              public eventCtrl: Events) {

    console.log('Hello NetworkProvider Provider');

    this.previousStatus = ConnectionStatusEnum.Online;
  }

  public initializeNetworkEvents(): void {
    this.network.onDisconnect().subscribe(() => {
      if (this.previousStatus === ConnectionStatusEnum.Online) {
        this.eventCtrl.publish('network:offline');
        // this.online = false;
        console.log("en network provider");
      }
      this.previousStatus = ConnectionStatusEnum.Offline;
    });
    this.network.onConnect().subscribe(() => {
      if (this.previousStatus === ConnectionStatusEnum.Offline) {
        this.eventCtrl.publish('network:online');
        // this.online = true;
        console.log("en network provider");
      }
      this.previousStatus = ConnectionStatusEnum.Online;
    });
  }

  getStatus():boolean{
    return this.online;
  }

}