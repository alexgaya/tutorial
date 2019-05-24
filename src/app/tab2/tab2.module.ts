import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PhotoService } from '../services/photo.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule implements OnInit {

  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.photoService.loadSaved();
  }
}
