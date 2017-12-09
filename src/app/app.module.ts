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
import { PerguntasPage } from '../pages/perguntas/perguntas';
import { PerguntarPage } from '../pages/perguntar/perguntar';
import { VotarPage } from '../pages/votar/votar';
import { HttpClientModule } from '@angular/common/http';
import { EventoProvider } from '../providers/evento/evento';
import { EnqueteProvider } from '../providers/enquete/enquete';
 
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
    PerguntasPage,
    PerguntarPage,
    VotarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    DatePickerModule,
    HttpModule,
    HttpClientModule
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
    ResponderPage,
    PerguntasPage,
    PerguntarPage,
    VotarPage
  ],
  providers: [Data, StatusBar, SplashScreen, DatePickerModule, EventoProvider, {provide: ErrorHandler, useClass: IonicErrorHandler},
    EnqueteProvider]
})
export class AppModule {}