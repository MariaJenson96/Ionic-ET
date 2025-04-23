import { Routes } from '@angular/router';
import { BottomToolbarComponent } from './shared/bottom-toolbar/bottom-toolbar.component';

export const routes: Routes = [
  {
    path: 'example',
    component: BottomToolbarComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      // {
      //   path: 'library',
      //   loadComponent: () => import('./library/library-page.component').then((m) => m.LibraryPageComponent),
      // },
      // {
      //   path: 'radio',
      //   loadComponent: () => import('./radio/radio-page.component').then((m) => m.RadioPageComponent),
      // },
      // {
      //   path: 'search',
      //   loadComponent: () => import('./search/search-page.component').then((m) => m.SearchPageComponent),
      // },
      {
        path: '',
        redirectTo: '/example/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/example/home',
    pathMatch: 'full',
  },
];