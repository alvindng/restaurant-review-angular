import {Component} from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-rating',
  inputs: ['restaurant'],
  template: `
    <div class="rating-form form-group col-sm-6">
      <label for="rating">Rate this restaurant</label>
      <select class='form-control rating' #rating>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>
      <label for="waiting">Waiting Time</label>
      <input class='form-control waiting' #waiting/>
      <button (click)="addReview(rating.value, waiting.value)">Add Review</button>
    </div>
  `
})

export class RestaurantRatingComponent {
  public restaurant: Restaurant;

  addReview(rating, waiting){
    this.restaurant.ratings.push(parseInt(rating));
    this.restaurant.waitings.push(parseInt(waiting));
    this.restaurant.getRating();
    this.restaurant.getWaiting();
  }
}
