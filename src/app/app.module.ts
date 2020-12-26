import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { MenusComponent } from './menus/menus.component';
import { UpdateComponent } from './update/update.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    
    AddRestaurantComponent,
    ListRestaurantComponent,
    AddMenuComponent,
    MenusComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
