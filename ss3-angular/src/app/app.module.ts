import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './practice1/font-size/font-size.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PetComponent } from './practice1/pet/pet.component';
import { ProductComponent } from './practice1/product/product.component';
import { CalculatorComponent } from './exercise/calculator/calculator.component';
import { ColorPickerComponent } from './exercise/color-picker/color-picker.component';
import { LikeComponent } from './practice1/hackernews/like/like.component';
import { NabarComponent } from './practice1/hackernews/nabar/nabar.component';
import { FooterComponent } from './practice1/hackernews/footer/footer.component';
import { NameCarComponent } from './practice1/name-card/name-car/name-car.component';
import { ProgressBarComponent } from './practice1/angular-progress-bar/progress-bar/progress-bar.component';
import { TodoComponent } from './practice1/angular-name-card/todo/todo.component';
import { RatingBarComponent } from './exercise/rating-bar/rating-bar.component';
import { CountdownTimeComponent } from './exercise/countdown-timer/countdown-time/countdown-time.component';
import { RegisterComponent } from './exercise/registrationForm/register/register.component';
import { LoginComponent } from './exercise/form-login/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    PetComponent,
    ProductComponent,
    CalculatorComponent,
    ColorPickerComponent,
    LikeComponent,
    NabarComponent,
    FooterComponent,
    NameCarComponent,
    ProgressBarComponent,
    TodoComponent,
    RatingBarComponent,
    CountdownTimeComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
