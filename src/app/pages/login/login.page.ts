import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides, { static: false }) ionSlides: IonSlides
  public wavesPosition: number = 0;
  public wavesDifference: number = 80;

  constructor() { }

  ngOnInit() { }

  segmentChanged(event: any) {
    if (event.detail.value === "login") {
      this.ionSlides.slidePrev();
      this.wavesPosition += this.wavesDifference;
    } else {
      this.ionSlides.slideNext();
      this.wavesPosition -= this.wavesDifference;
    }
  }

  slideChanged(event: any) {
    console.log(event);
  }

}
