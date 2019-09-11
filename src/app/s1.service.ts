import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor(@Inject(HttpClient) public ht) { }

  // to fetch data from collection
  serGetCat(){
    return this.ht.get("catref/getcat")
  }

//to update the category data
  serUpdateCat(ob){
    return this.ht.post("catref/updatecat",ob)
  }


  //  to insert in collection  
  serInsertCat(ob){
    return this.ht.post("catref/insertcat",ob)
  }
}
