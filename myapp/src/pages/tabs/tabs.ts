import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SettingPage } from '../setting/setting';
import { TestPage } from '../test/test';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SettingPage;
  tab3Root = TestPage;

  constructor() {

  }
}
