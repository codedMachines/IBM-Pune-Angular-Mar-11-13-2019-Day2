import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ActorlistComponent } from './components/actorlist/actorlist.component';
import { DemoComponent } from './components/demo/demo.component';

import { ActorlistService } from './services/actorlist.service';

@NgModule({
  declarations: [
    AppComponent,
    ActorlistComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [
    ActorlistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
