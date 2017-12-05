import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParticiparPage } from './participar';

@NgModule({
  declarations: [
    ParticiparPage,
  ],
  imports: [
    IonicPageModule.forChild(ParticiparPage),
  ],
})
export class ParticiparPageModule {

  constructor() { }


}
