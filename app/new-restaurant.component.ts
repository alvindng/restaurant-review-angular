import {Component, EventEmitter} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Component({
  selector: 'new-restaurant',
  outputs: ['onSubmitNewRestaurant'],
  template: `
  <div class="restaurant-form form-group col-sm-6">
    <h3>Create Restaurant:</h3>
    <input placeholder="Restaurant Name" class="form-control col-sm-8 input-lg" #newRestaurant>
    <input placeholder="Restaurant Specialty" class="form-control col-sm-8 input-lg" #newSpecialty>
    <input placeholder="Restaurant Address" class="form-control col-sm-8 input-lg" #newAddress>
    <input placeholder="Restaurant Price" class="form-control col-sm-8 input-lg" #newPrice>
    <button (click)="addRestaurant(newRestaurant,newSpecialty,newAddress,newPrice)"  class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})

export class NewRestaurantComponent {
  public onSubmitNewRestaurant: EventEmitter<Object>;
  constructor(){
    this.onSubmitNewRestaurant = new EventEmitter();
  }
  addRestaurant(userRestaurant: HTMLInputElement, userSpecialty: HTMLInputElement,userAddress: HTMLInputElement, userPrice: HTMLInputElement){
    this.onSubmitNewRestaurant.emit({
      name: userRestaurant.value,
      specialty: userSpecialty.value,
      price:userPrice.value,
      address:userAddress.value
    });
    userRestaurant.value = "";
  };
}
