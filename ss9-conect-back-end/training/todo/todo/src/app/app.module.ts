import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo/todo.component';
import { SecondComponent } from './todo/todo/second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
