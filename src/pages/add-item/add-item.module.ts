import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddItemPage } from './add-item';
import { DatePickerModule } from 'datepicker-ionic2'


@NgModule({
  declarations: [
    AddItemPage,
  ],
  imports: [
    IonicPageModule.forChild(AddItemPage),
    DatePickerModule
  ],
})
export class AddItemPageModule {}
