import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { FirstComponent1Component } from './components/first-component1/first-component1.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    FirstComponent1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
