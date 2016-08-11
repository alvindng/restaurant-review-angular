import {Component} from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-display',
  inputs: ['restaurant'],
  template: `
  <div>
    <h3>{{ restaurant.name }} </h3>
    <h4>Specialty: {{ restaurant.specialty }}</h4>
    <h4>Price: {{ restaurant.price }}</h4>
    <h4>Address: {{ restaurant.address }}</h4>
    <h4 *ngIf='restaurant.getRating() > 0'>Rating: {{ restaurant.getRating() }} stars</h4>
    <h4 *ngIf='restaurant.getWaiting() > 0'>Waiting time: {{ restaurant.getWaiting() }} minutes</h4>
  </div>
  `
})

export class RestaurantComponent{
  public restaurant: Restaurant;
}
