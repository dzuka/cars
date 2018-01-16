import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './component/layout/layout.component';
import { CarComponentComponent } from './car-component/car-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CarComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
