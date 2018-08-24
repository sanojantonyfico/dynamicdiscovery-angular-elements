import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/*if (environment.production) {
 console.log("@@@ enableProdMode");
 enableProdMode();
 }*/

platformBrowserDynamic ().bootstrapModule ( AppModule )
                         .catch ( err => console.log ( err ) );
