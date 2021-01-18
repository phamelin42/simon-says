import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SimonComponent } from './simon.component';
import { StoreModule } from '@ngrx/store';
import { simonReducer } from './store/simon.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    SimonComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({simon: simonReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [SimonComponent]
})
export class SimonModule { }
