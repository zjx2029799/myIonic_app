import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { SettingPage } from '../pages/setting/setting';
import { TestPage} from '../pages/test/test';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailsPage} from '../pages/details/details';


import {ChartsModule} from 'ng2-charts/charts/charts';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StoreModule } from '@ngrx/store';
import { BirthdaysReducer } from './reducers/birthday.reducer';
import { BirthdayActions } from '../actions/birthday.actions';

@NgModule({
  declarations: [
    MyApp,
    SettingPage,
    HomePage,
    DetailsPage,
    TestPage,
    TabsPage
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    StoreModule.provideStore({ birthdays: BirthdaysReducer })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    SettingPage,
    TestPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BirthdayActions
  ]
})
export class AppModule {}
