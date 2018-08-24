import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './storeAndReducer/home/home.component';
import { createReducer } from './counter';
import { IncrementComponent } from './storeAndReducer/increment/increment.component';
import { DecrementComponent } from './storeAndReducer/decrement/decrement.component';
import { ResetComponent } from './storeAndReducer/reset/reset.component';
import { UsersComponent } from './users/users.component';
import { userReducer } from './users/store/user-reducer';
import { UserViewComponent } from './users/user-view/user-view.component';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { CreateUserEffect } from './users/effects/user-effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    IncrementComponent,
    DecrementComponent,
    ResetComponent,
    AppComponent,
    UsersComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({user: userReducer}),
    EffectsModule.forRoot([CreateUserEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
