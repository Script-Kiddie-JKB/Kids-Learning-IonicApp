import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
 name: any;
  constructor(public alert: AlertController) { }

  ngOnInit() {
  }
  async presentAlert(event){
    console.log('submitted');
    const alert1 = await this.alert.create({
    cssClass: 'my-custom-class',
    subHeader: '',
    message: 'Thank you for your feedback!!',
    buttons: ['OK', 'Cancel']
  });
  await alert1.present();
  this.name = '';
  }
}
