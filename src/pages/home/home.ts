import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PushNotification } from '../../api/push';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {
    let push =  new PushNotification({
              alias: "user@example.com",
              categories: ["Curling", "Hurling"]
            });    
  }

}
