import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
 //import { RatingModule} from 'ng-starrating'; 
import { FormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RatingComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    FoodpageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    //RatingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})


// declarations: [
//   AppComponent,
//   HeaderComponent,
//   HomeComponent
// ],
// imports: [
//   BrowserModule,
//   AppRoutingModule,
//   FormsModule,  
//    RatingModule   
// ],
// providers: [],
// bootstrap: [AppComponent]
// })




export class AppModule { }