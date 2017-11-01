import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];
/*
@NgModule({
  imports: [RouterModule.forRoot(routes,
      { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
*/
export const AppRouting = RouterModule.forRoot(appRoutes, {useHash: true});

