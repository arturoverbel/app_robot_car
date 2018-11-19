import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from "@angular/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(
        public navCtrl: NavController,
        public alertCtrl: AlertController, 
        public http: Http
    ) { }
    
    showAlert(status) {
        let data = (status == 1) ? 'on' : 'off';
        let url = 'http://35.168.88.201:3001/light/' + data;
        this.http.get(url)
          .subscribe(response => {
            console.log(response.json())
          }, xhr => {
            console.log(xhr);
          });
        
        const alert = this.alertCtrl.create({
          title: 'Petición enviada',
          subTitle: 'Status: ' + status,
          buttons: ['OK']
        });
        alert.present();
    }

}
