import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Dynamicelement1Component } from 'dynamicelement1';
import { createCustomElement } from '@angular/elements';
import 'zone.js';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    Dynamicelement1Component
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {

  constructor ( private injector: Injector ) {

  }

  ngDoBootstrap () {
    console.log ( '$$$$$$$$$$$$$$$$$$ Dynamic Element1 Bootstrapped!$$$$$$$$$$$$$$$$$$' );
    const customElement = createCustomElement ( Dynamicelement1Component, { injector: this.injector} );
    customElements.define ( 'dynamic-element1', customElement );
  }
}
