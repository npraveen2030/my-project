// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes'; 
import { userReducer } from './app/state/user.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideStore({ users: userReducer }),
    provideStoreDevtools({ maxAge: 25 }),
  ],
}).catch(err => console.error(err));
