# Dynamicdiscovery

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

The primary aim is to simulate integrating three angular elements from three different teams into a common app.
This is right now the integrator is a simple html file. It could be an angular app. 

This project will move to make the integrator an angular app. 
dynamicdiscovery project will become that integrator and will add ngx-build-plus to provide 
partial web-pack files. This allows us to have a single app supply all dependencies rather than each angular element coming with
their dependencies and messing up the final app.  

So currently this project has three angular element library projects, 
 a. dynamicelement1
 b. dynamicelement2
 c. dynamicelement3
 
 and for each library there is a partial angular app which bootstraps a component from the library.
 Partial apps are
 a. dynamicdiscovery1 (src-dyn1)  
 b. dynamicdiscovery2 (src-dyn2)
 c. dynamicdiscovery3 (src-dyn3)
 
The main app source is src. Not used at this moment. but will be used when ngx-build-plus is added.
 
## Development server

Once the packaging is done, a webserver will be serving index.html from elements-demo using gulp webserver at port 9080.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run 'npm run package-elements' for production build of all angular elements, all bootstrap 
         partial apps and then packaging angular element js files. extractCss has been turned off so only js files are generated.
Run 'npm run package-elementsdebug' for building a debug version which allows better debugging and to see clear error messages. 

Both with build and launch a demo web page which allows a UI which displays a list of angular elements you can select and render..
Note: ShowAll is not implemented. 
      After each selection and rendering, click refresh button to reset the state. There is a name collision with createCustomElement.
      Eventually we wanted to support show all option where all dynamically loaded angular elements can be displayed at once.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
