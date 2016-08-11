import {Component, EventEmitter} from 'angular2/core';
import {RestaurantComponent} from './restaurant.component';
import { Restaurant } from './restaurant.model';
import { EditRestaurantDetailsComponent} from './edit-restaurant-details.component';
import {NewRestaurantComponent} from './new-restaurant.component';
import {RestaurantRatingComponent} from './restaurant-rating.component';

@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  outputs: ['onRestaurantSelect'],
  directives: [RestaurantComponent, EditRestaurantDetailsComponent, NewRestaurantComponent, RestaurantRatingComponent],
  template: `
  <restaurant-display *ngFor="#currentRestaurant of restaurantList"
    (click)='restaurantClicked(currentRestaurant)'
    [class.selected]='currentRestaurant === selectedRestaurant'
    [restaurant]='currentRestaurant'>
  </restaurant-display>
  <edit-restaurant-details *ngIf='selectedRestaurant' [restaurant]='selectedRestaurant'>
  </edit-restaurant-details>
  <new-restaurant (onSubmitNewRestaurant)="createRestaurant($event.name, $event.specialty, $event.address, $event.price)"></new-restaurant>
  <restaurant-rating *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant"></restaurant-rating>
  `
})
export class RestaurantListComponent {
  public restaurantList: Restaurant[];
  public onRestaurantSelect: EventEmitter<Restaurant>;
  public selectedRestaurant: Restaurant;
  constructor(){
    this.onRestaurantSelect = new EventEmitter();
  }
  restaurantClicked(clickedRestaurant: Restaurant): void {
    console.log('child', clickedRestaurant);
    this.selectedRestaurant = clickedRestaurant;
    this.onRestaurantSelect.emit(clickedRestaurant)
  }
  createRestaurant(name: string, specialty: string, address: string, price: string, id: number): void{
    this.restaurantList.push(
      new Restaurant(name, specialty, address, price,id)
    )
  }
}
