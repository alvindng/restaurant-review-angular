export class Restaurant{
  public ratings: number[] = [];
  public waitings: number[] = [];
  constructor(public name: string, public specialty: string, public address: string, public price: string, public id: number) {
  }
  getRating(){
    var total = 0;
    for(var rating of this.ratings){
      total += rating;
    }
    return (total/(this.ratings.length)).toFixed(2);
  }
  getWaiting(){
    var total = 0;
    for(var waiting of this.waitings){
      total += waiting;
    }
    return total/(this.waitings.length);
  }
}
