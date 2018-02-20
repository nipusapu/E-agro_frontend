import {Routes,RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {ItemdetailComponent} from './home/itemdetail/itemdetail.component';
import {ItemcartComponent} from './home/itemcart/itemcart.component';
import {EagrochatComponent} from './eagrochat/eagrochat.component';
import {EagrochatbotComponent} from './eagrochatbot/eagrochatbot.component';

export const APP_ROUTES :
Routes =[
    {path : '',redirectTo:'/home',pathMatch:'full'},
    {path : 'home',component:HomeComponent},
    {path : 'home/detail',component:ItemdetailComponent},
    {path : 'home/detail/cart',component:ItemcartComponent},
    {path :'login',component:LoginComponent},
    {path :'register',component:RegisterComponent},
    {path :'message',component:EagrochatComponent},
    {path :'chatbot',component:EagrochatbotComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);