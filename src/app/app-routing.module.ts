import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';

import { MenusComponent } from './menus/menus.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  
  {path:"creat/0",component:AddRestaurantComponent},
  {path:"restuarnt",component:ListRestaurantComponent},
  {path:"addMenu",component:AddMenuComponent},
  {path:"menu/:id",component:MenusComponent},
  {path:"update/:id",component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
