import { Injectable } from '@angular/core';
import{ Http,Response,Headers,RequestOptions } from '@angular/http';
import{ Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Item} from '../item';
import {CartItem} from '../cart-item';
/* import { Http } from '@angular/http/src/http'; */


@Injectable()
export class ItemService {

    private cartItems : CartItem [] = []; 
 
  private sItem : Item = null;
  private items : any;
 /*  private items : Item[]  = 
  [ {itemId:11,name: 'Green Apple',description:'Nuwara Eliya best products',type:'1',price:'20.00',imageUrl:'https://steptohealth.com/wp-content/uploads/2016/09/3-green-apples.jpg'},
    {itemId:12,name: 'Green Grapes',description:'Jaffna best products',type:'1',price:'20.00',imageUrl:'https://cdn.pixabay.com/photo/2017/08/19/20/52/grapes-2659832_1280.jpg'},
    {itemId:13,name: 'Pumpkin',description:'Monaragala best products',type:'2',price:'25.00',imageUrl:'http://trigofoods.ca/wp-content/uploads/2015/12/Kabocha-Squash.png'},
    {itemId:14,name: 'Samba',description:'Sudu Samba',type:'3',price:'50.00',imageUrl:'http://sites.in4net.com/wp-content/uploads/sites/2/2017/05/rice-625_625x350_71426749881.jpg'},
    {itemId:15,name: 'Mammoty',description:'Crocodile Mammoty',type:'4',price:'1000.00',imageUrl:'http://www.manslanka.com//dbimages/product/1389258508_pdc_1.jpg'},
    {itemId:16,name:'Scott',description:'Scott Fertilizer CIC',type:'5',price:'400.00',imageUrl:'https://www.scotts.com/sites/g/files/oydgjc106/files/asset_images/products/Scotts/US-Scotts-Turf-Builder-Lawn-Food-22305-Main-Xlg.png'}
  ]; */

  /* private itemImages: { id: number, imageUrl: string }[] = [
    { "id": 11, "imageUrl": "https://steptohealth.com/wp-content/uploads/2016/09/3-green-apples.jpg" },
    { "id": 11, "imageUrl": "http://i.dailymail.co.uk/i/pix/2015/02/20/25DC802700000578-2961282-Green_apples_are_rich_in_dietary_fiber_helping_you_feel_fuller_f-m-30_1424437482034.jpg" },
    { "id": 11, "imageUrl": "http://www.judecollins.com/wp-content/uploads/2017/01/green-apple.png" },
    
  ];
 */
 
   private categories : string [] =[];
  


  constructor(private http : Http) { 

  }
/*  getAllEvents(){
    this.loginServise.createAuthenticationHeader();
    return this.http.get('http://localhost:8080/api/allEvents',this.loginServise.options).map((response: Response) => response.json());
  }  */

  getItems(){
    return this.http.get('/api/products').map((response: Response) => response.json());
        
}

 getCategory(){
  return this.http.get('/api/categories').map((response:Response) => response.json());
 }

 getCategoryByID(categoryId:number){
  return this.http.get('/api/products/'+categoryId).map((response:Response) => response.json());
} 

private handleError(error: Response) {
    return Observable.throw(error.statusText);
}


/*    getItems()
  {
      return this.items;
  } */
/*   getCategories()
  {
    return this.categories;
  } */
//    getFilteredItems(cid : number)
//   {
//     return this.items.filter(
//       item => item.categoryId === cid);
// }
  
   /*getSelectedItem(itemId : number)
  {
    console.log(itemId);
   this.sItem =  this.items.filter(
          item => item.itemId == itemId)[0];
          return this.sItem;
  }
  getItemImages()
  {
    return this.itemImages;
  }
  getSelectedItemImages(itemId : number)
  {
    console.log(itemId);
   return  this.itemImages.filter(
          item => item.id == itemId);

  }
  addCartItems(id : string, q : any)
 {
    let ci: CartItem = new CartItem (0, '',0,'','','');
    let cItem :Item = new Item(0,'','','','','');
    cItem = this.getSelectedItem(+id);
    var ss = cItem.price.split(".", 2);
    var splitprice = +ss[1];

    for (var index = 0; index < this.cartItems.length; index++) 
    {
      if(cItem.itemId == this.cartItems[index].itemId)
        {
         this.cartItems.splice(index,1);         
        }
    }
          ci.itemId = cItem.itemId;
          ci.name = cItem.name;
          ci.price = cItem.price;
          ci.imagePath = cItem.imageUrl;
          ci.quantity = q;
          ci.total =( q*+(splitprice)).toString();
          this.cartItems.push(ci);

    console.log(this.cartItems);
 }
 getCartItems()
  {
      return this.cartItems;
  }
  deleteCartItem(id : number)
  {
    for (var index = 0; index < this.cartItems.length; index++) 
    {
      if(id == this.cartItems[index].itemId)
        {
         this.cartItems.splice(index,1);
         console.log(this.cartItems);
         localStorage.clear();   
         localStorage.setItem("cartitems", JSON.stringify(this.cartItems));
         console.log(localStorage);        
        }
    } 
  } */
  
}
