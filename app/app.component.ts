import { Component, EventEmitter } from 'angular2/core';
import { RestaurantListComponent} from './restaurant-list.component';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'my-app',
  directives: [RestaurantListComponent],
  template: `
    <div class='container'>
      <h1>Restaurant Reviews</h1>
      <restaurant-list
      [restaurantList]='restaurants'
      (onRestaurantSelect)='restaurantWasSelected($event)'>
      </restaurant-list>
    </div>
  `
})

export class AppComponent {
  public restaurants: Restaurant[];
  constructor(){
    this.restaurants = [
      new Restaurant("Italian Restaurant", "Italian", "Italian address", "$$", 0),
      new Restaurant("Mexican Restaurant", "Mexican", "Mexican address", "$", 1),
    ];
  }
  restaurantWasSelected(clickedRestaurant: Restaurant): void {
    console.log('parent', clickedRestaurant)
  }
}
