import { Component } from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {CameraPreview} from "@ionic-native/camera-preview";


@Component({
  selector: 'page-story-photo',
  templateUrl: 'story-photo.html',
})
export class StoryPhotoPage {

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private cameraPreview : CameraPreview,
               private platform : Platform) {
    this.startCamera();
  }

  startCamera(){

    try{
      this.cameraPreview.stopCamera().then(() =>{
        console.log("camera started")

      }).catch(e =>{
        console.log("camera error")
      });
    }catch(e) {

    }
    // start camera
    this.cameraPreview.startCamera({x: 0, y: 0, width:this.platform.width(), height: this.platform.height(), toBack: true, previewDrag: false, tapPhoto: true});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoryPhotoPage');
  }

}
