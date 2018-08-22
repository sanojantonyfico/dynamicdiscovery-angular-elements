import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Dynamicelement3Component } from 'dynamicelement3';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    Dynamicelement3Component
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    Dynamicelement3Component
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {

  constructor ( private injector: Injector ) {

  }

  ngDoBootstrap () {
    console.log ( '$$$$$$$$$$$$$$$$$$ Dynamic Element3 Bootstrapped!$$$$$$$$$$$$$$$$$$' );
    const customElement = createCustomElement ( Dynamicelement3Component, { injector: this.injector} );
    customElements.define ( 'dynamic-element3', customElement );
  }
}
