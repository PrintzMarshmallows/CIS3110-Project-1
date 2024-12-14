import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter} from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routeConfig)],
}).catch((err) => console.error(err));


/*
main.ts serves as the entry point by which the angular application gets built. The bootstrapApplication function takes the appComponent import from 
the origin point of the entire web application and its configuration to throw an error into the console for when the website fails
to build after you do ng serve in the command line. 

The catch error function takes AppComponent (the actual origin)
*/


/*
JavaScript is essentially the logic oriented portion of a website. It's what makes websites interactive to the user and makes a website enjoyable to go on.
Every single website these days have a lot of logic handling as it contributes to essential business functions and the UI/UX experience. 

TypeScript is basically JavaScript with all kinds of types (int, double, etc.. kind of like Rust & Go). Also, it has specialized types for the web too like 
different Event Handler types.

TypeScript exists because JS is ABSOLUTELY DETACHED from reality (seriously who thought arr[] = ['Dog', 6, '6', 8.9] was a good thing???)
and JS is known to produce the most buggy code in existence and ridiculous design patterns that could only be 
implemented in a language if it was designed by kindergardeners high on acid.

TS stops this by catching this stuff at runtime and event handling so you get errors instead of weird behaviors, buggy code, and it's generally more safe. 

You don't even have to implement manual checks for if the input is the correct type unlike in JS. 

Since TS is just JS with types, it's still compatible with JS.
*/
