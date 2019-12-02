import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import * as AppRoutingJson from '../assets/data/routing.json';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteoneComponent } from './routeone/routeone.component';
import { RoutetwoComponent } from './routetwo/routetwo.component';

const routes: Routes =[];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [PageNotFoundComponent, RouteoneComponent, RoutetwoComponent],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.prepareRoutes(AppRoutingJson);
  }

  prepareRoutes(routesJson: any) {
    let routesArr = [] as Routes;

    routesArr = [
      {
        path: 'routeone',
        component: RouteoneComponent,
      },
      {
        path: 'routetwo',
        component: RoutetwoComponent,
      },
      { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)}
    ];
   // routesArr=AppRoutingJson;
    routesArr.forEach(route => {
      routes.push(route);
    });

    routes.push(
      {
        path: 'page-not-found',
        component: PageNotFoundComponent,
      },
      {
        path: '**',
        redirectTo: 'page-not-found',
      }
    );
    console.log(routes);
    this.router.resetConfig(routes);
  }
}
