import {Component} from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'edit-restaurant-details',
  inputs: ['restaurant'],
  template: `
    <div class="restaurant-form form-group col-sm-6">
      <h3>Edit Restaurant: {{restaurant.name}}</h3>
      <input [(ngModel)]="restaurant.name" class="form-control input-lg"/>
      <label for="price">price</label>
      <select class='form-control' [(ngModel)]='restaurant.price'>
        <option value='$'>$</option>
        <option value='$$'>$$</option>
        <option value='$$$'>$$$</option>
        <option value='$$$$'>$$$$</option>
        <option value='$$$$$'>$$$$$</option>
      </select>

    </div>
  `
})

export class EditRestaurantDetailsComponent {
  public restaurant: Restaurant;
}
