import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddItemPage } from '../pages/add-item/add-item';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { Data } from '../providers/data/data';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatePickerModule } from 'datepicker-ionic2';
import { HttpModule } from '@angular/http';
import { HistoriaPage } from '../pages/historia/historia';
import { ContatoPage } from '../pages/contato/contato';
import { ParticiparPage } from '../pages/participar/participar';
import { ResponderPage } from '../pages/responder/responder';
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddItemPage,
    ItemDetailPage,
    HistoriaPage,
    ContatoPage,
    ParticiparPage,
    ResponderPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    DatePickerModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddItemPage,
    ItemDetailPage,
    HistoriaPage,
    ContatoPage,
    ParticiparPage,
    ResponderPage
  ],
  providers: [Data, StatusBar, SplashScreen, DatePickerModule, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}