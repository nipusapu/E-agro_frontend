import { Component, OnInit, Input,OnDestroy} from '@angular/core';
import {Item} from '../../item';
import {ItemService} from '../item.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'sc-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


  items :any;
  categories : any ;
  constructor(private itemservice : ItemService,private activatedroute: ActivatedRoute,private router : Router) {
    
   }

  ngOnInit() {
     let cid = null;
    this.activatedroute.queryParams.subscribe((params : Params)=>
    { debugger;
        cid = params['category'];
        if(cid == 0 || cid == null)
        {
         this.items = this.getAllItems();
        }
        else
        { 
         
        this.items =  this.getCategoriesByID(cid);
        }
    });    
     this.getAllItems(); 
     this.getAllCategories(); 
    /* this.getCategoriesByID(cid); */
    
  }

 /*   getItems()
  {
    this.items = this.itemservice.getItems();
  } */
  /* filterItems(cid : number)
  {

    this.itemservice.getItems().subscribe(response =>{
      this.items = response;
      console.log(this.items);
     }) 
  console.log(cid);
     this.getCategoriesByID(cid);
  }
 */
  getAllItems(){
     this.itemservice.getItems().subscribe(response =>{
     this.items = response._embedded.products;
     console.log(response);
     console.log(this.items);
    }) 
  }
 
  getAllCategories(){
    this.itemservice.getCategory().subscribe(response =>{
      console.log(response);
    this.categories = response._embedded.categories;
    console.log(this.categories);
   }) 
 }

  getCategoriesByID(categoryID:number){
  this.itemservice.getCategoryByID(categoryID).subscribe(response =>{
    console.log(response);
  this.items = response;
  console.log(this.items);
 }) 
} 
}
