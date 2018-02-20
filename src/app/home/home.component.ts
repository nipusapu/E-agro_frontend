import { Component, OnInit, Input} from '@angular/core';
import {Item} from '../item';
import {ItemService} from './item.service';

@Component({
  selector: 'sc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 categories : any;
  items : Item[] = [];

  constructor(private itemservice : ItemService) {

   }
 

  ngOnInit() {  
   this.getCategories();
  }

  getCategories(){
    this.itemservice.getCategory().subscribe(response =>{
      this.categories = response._embedded.categories;
      console.log(this.categories);
    })
  }

 getCategoriesByID(categoryID:number){
    this.itemservice.getCategoryByID(categoryID).subscribe(response =>{
    this.items = response;
    console.log(this.items);
   }) 
  }
} 
