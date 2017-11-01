import { NgModule } from '@angular/core';

import { HomeRouting } from './home.routing';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRouting
  ],
  providers: []
})
export class HomeModule {}
