import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Dynamicelement2Component } from 'dynamicelement2';
import { createCustomElement } from '@angular/elements';

@NgModule ( {
  declarations   : [
    AppComponent,
    Dynamicelement2Component
  ],
  imports        : [
    BrowserModule
  ],
  entryComponents: [
    Dynamicelement2Component
  ],
  providers      : [],
  bootstrap      : []
} )
export class AppModule {

  constructor ( private injector: Injector ) {

  }

  ngDoBootstrap () {
    console.log ( '$$$$$$$$$$$$$$$$$$ Dynamic Element2 Bootstrapped!$$$$$$$$$$$$$$$$$$' );
    const customElement = createCustomElement ( Dynamicelement2Component, { injector: this.injector } );
    customElements.define ( 'dynamic-element2', customElement );
  }
}
