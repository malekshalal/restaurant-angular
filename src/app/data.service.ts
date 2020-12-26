import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from './menu';
import { Restaurant } from './restaurant';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  
  restaurantURL:string="http://localhost:3000/restaurant";
  menuURL:string="http://localhost:3000/menu"

  //resturants:any=[new Restaurant(1,"k","m","r",5,6,"/assets/img/ppu.png")];
  menu:Menu[]=[];
  restaurants:Restaurant[]=[];


  
  constructor(private http: HttpClient) {
  }
  


//restaurant service

getRestaurant():Observable<object>{
  return this.http.get(this.restaurantURL)
}






AddResturant(_restaurant:any):Observable<object>{
  
 return this.http.post(this.restaurantURL,_restaurant);
}






getcurrentRest(id):Observable<object>{ 
  return this.http.get(this.restaurantURL+"/"+id)
 
}



update(id: number,data: any):Observable<object>{
  return this.http.put(this.restaurantURL+"/"+id,data)
}




/* savechange(id:any,data:any){
  for(let i=0;i<this.restaurants.length;i++){
    if(this.restaurants[i].id==id){
      this.restaurants[i].name=data.name;
      this.restaurants[i].city=data.city;
      this.restaurants[i].street=data.street;
      this.restaurants[i].lat=data.lat;
      this.restaurants[i].lon=data.lon;
      this.restaurants[i].image=data.image;
      
    }
  }

} */

deletRestaurant(id: number): Observable<object> {
  
  return this.http.delete(`http://localhost:3000/restaurant/${id}`)
      

}

//sevice menu

getmenu (){
  return this.menu;
}


addmenu(menu:Menu){
return this.http.post(this.menuURL,menu)


}

showmenus(id:any){
let menus: any[]=[];


this.http.get(this.menuURL+"/"+id)
return menus;
}



}
