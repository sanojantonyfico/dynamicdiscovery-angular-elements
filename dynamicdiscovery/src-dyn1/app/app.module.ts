import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Dynamicelement1Component, Dynamicelement1Module } from 'dynamicelement1';
import { createCustomElement } from '@angular/elements';

@NgModule ( {
  declarations   : [
    AppComponent
  ],
  imports        : [
    BrowserModule,
    Dynamicelement1Module
  ],
  entryComponents: [],
  providers      : [],
  bootstrap      : []
} )
export class AppModule {

  constructor ( private injector: Injector ) {

  }

  ngDoBootstrap () {
    console.log ( '$$$$$$$$$$$$$$$$$$ Dynamic Element1 Bootstrapped!$$$$$$$$$$$$$$$$$$' );
    const customElement = createCustomElement ( Dynamicelement1Component, { injector: this.injector } );
    customElements.define ( 'dynamic-element1', customElement );
  }
}
