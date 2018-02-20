import { Component, OnInit, Input} from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegisterService } from './register.service';
import {User} from '../user';

@Component({
  selector: 'sc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  /* providers: [RegisterService] */
})
export class RegisterComponent implements OnInit {

 user :User[];
  users:User ={
    firstName:"",
    lastName:"",
    userName:"",
    email:"",
    password:""
  };

  constructor(private _registerService:RegisterService) { }

/*   private _registerService:RegisterService */
 
  /* @Input() user : User = {firstname : '', lastname : '', username : '',email : '', password: '', agree: null}; */

  ngOnInit() {
    /* this.getRegister(); */
  }

/*   getRegister(){
    this.user = this._registerService.getRegisterFromService();
  }
 */
  onSubmit()
  {
    console.log(this.users)
    this._registerService.addData(this.users).subscribe(data => {                
      console.log('Successful')
    });
  } 

/*    saveData(users:any){
     console.log(users)
    this._registerService.addData(users).subscribe(data => {                
         console.log('Successful')
  }); */ 
}
