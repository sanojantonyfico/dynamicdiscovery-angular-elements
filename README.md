# Dynamic discovery and rendering of angular elements

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

The primary aim is to simulate integrating three angular elements from three different teams into a common app.
Currently the integrator is a simple html file. 

This project will be updated to make the integrator an angular app. 
dynamicdiscovery project will become that integrator and will add ngx-build-plus to provide 
partial web-pack files. This allows us to have a single app supply all dependencies rather than each angular element coming with
their dependencies and messing up the final app.  

So currently this project has three angular element library projects, 
<ul>
 <li> dynamicelement1</li>
 <li> dynamicelement2</li>
 <li> dynamicelement3</li>
</ul>
 
 and for each library there is a partial angular app which bootstraps a component from the library.
 Partial apps are
 <ul>
 <li> dynamicdiscovery1 (src-dyn1) </li>  
 <li> dynamicdiscovery2 (src-dyn2) </li>
 <li> dynamicdiscovery3 (src-dyn3) </li>
 </ul>
 
The main app source is src. Not used at this moment. but will be used when <a href="https://www.npmjs.com/package/ngx-build-plus">ngx-build-plus</a> is added.
 
## Demo server

Once packaging is done, a webserver will be serving index.html from <b>elements-demo</b> folder using gulp webserver at port 9080.

## Build
<p>
Run <code>npm run package-elements</code> for production build of all angular elements, all bootstrap 
         partial apps and then packaging angular element js files. extractCss has been turned off so only js files are generated.
         
Run <code>npm run package-elementsdebug</code> for building a debug version which allows better debugging and to see clear error messages. 
</p>
<p>
Both commands will build and launch a demo web page, which renders a UI, which displays a list of angular elements you can select and render.
</p>
<p>
<b>Note</b>: ShowAll is not implemented. 
      After each selection and rendering, click refresh button to reset the state. There is a name collision with createCustomElement.
      Eventually we wanted to support show all option where all dynamically loaded angular elements can be displayed at once.
</p>
## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
