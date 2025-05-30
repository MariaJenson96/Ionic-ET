import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  IonRouterOutlet
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';
import { HomePage } from 'src/app/home/home.page';

@Component({
  selector: 'app-bottom-toolbar',
  templateUrl: './bottom-toolbar.component.html',
  styleUrls: ['./bottom-toolbar.component.scss'],
  imports:[IonContent, IonHeader, IonIcon, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, IonRouterOutlet, HomePage]
})
export class BottomToolbarComponent {

  constructor() {
    addIcons({ library, playCircle, radio, search });
  }

}
