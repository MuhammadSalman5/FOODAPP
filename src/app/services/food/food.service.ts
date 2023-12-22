import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  
getFoodById(id:number):Foods{
return this.getall().find(food => food.id==id)!;
}



  getAllFoodByTag(tag:string): Foods[] {
return tag == 'All' ?
this.getall():this.getall().filter(food =>food.tags?.includes(tag));

// also write this one
// if(tag == 'All')
// return this.getall()
// else
// return this.getall().filter(food =>food.tags?.includes(tag));

  }



//   getall():string[]{
//   return[
// '/assets/burger1.jpg',
// '/assets/burger2.jpg',
// '/assets/burger3.jpg',
// '/assets/burger4.jpg',
// '/assets/burger5.jpg',
// '/assets/burger6.jpg',
// '/assets/burger7.jpg',
// '/assets/burger8.jpg',
//   ]
// }

getAllTag():Tag[]{
return[
  {name:'All', count:16},
  {name:'FastFood', count:9},
  {name:'Pizza', count:4},
  {name:'BBQ', count:3},
  {name:'Karahi', count:3}
]
}


getall():Foods[]{
return[
  {
id : 1,
name: 'Loaded burger',
price: 700,
cookTime: '20-30',
favourite: false,
origins: ['Italian'],
star:4.0,
imageurl:'/assets/burger1.jpg' ,
tags: ['FastFood', 'buger'],
},

{
  id : 2,
  name: 'Chicken burger',
  price: 350,
  cookTime: '20-30',
  favourite: false,
  origins: ['Pakistani'],
  star:4.0,
  imageurl:'/assets/burger2.jpg' ,
  tags: ['FastFood', 'buger','Fastfood'],
  },

  {
    id : 3,
    name: 'Classic burger',
    price: 500,
    cookTime: '20-30',
    favourite: false,
    origins: ['Pakistani'],
    star:4.0,
    imageurl:'/assets/burger3.jpg' ,
    tags: ['FastFood', 'buger'],
    },

    {
      id : 4,
      name: 'Dynamit burger',
      price: 800,
      cookTime: '20-30',
      favourite: false,
      origins: ['Mexico'],
      star:4.0,
      imageurl:'/assets/burger4.jpg' ,
      tags: ['FastFood', 'buger'],
      },

      {
        id : 5,
        name: 'Full Loaded burger',
        price: 1400,
        cookTime: '20-30',
        favourite: false,
        origins: ['Pakistani'],
        star:4.0,
        imageurl:'/assets/burger5.jpg' ,
        tags: ['FastFood', 'buger'],
        },

        {
          id : 6,
          name: 'burger',
          price: 400,
          cookTime: '20-30',
          favourite: false,
          origins: ['Pakistani'],
          star:4.0,
          imageurl:'/assets/burger6.jpg' ,
          tags: ['FastFood', 'buger'],
          },

          {
            id : 7,
            name: 'Special Beef burger',
            price: 400,
            cookTime: '20-30',
            favourite: false,
            origins: ['Pakistani'],
            star:4.0,
            imageurl:'/assets/burger7.jpg' ,
            tags: ['FastFood', 'buger'],
            },


            {
              id : 8,
              name: 'Beef Vegeti burger',
              price: 900,
              cookTime: '20-30',
              favourite: false,
              origins: ['Turkish'],
              star:4.0,
              imageurl:'/assets/burger8.jpg' ,
              tags: ['FastFood', 'buger'],
              },
              {
                id : 9,
                name: 'Afghani Pizza',
                price: 1400,
                cookTime: '20-30',
                favourite: false,
                origins: ['Pakistani'],
                star:4.0,
                imageurl:'/assets/afghanipizza.jpg' ,
                tags: ['FastFood', 'Pizza','pizza'],
                },
                {
                  id : 10,
                  name: 'Pizza Supreme',
                  price: 2000,
                  cookTime: '20-30',
                  favourite: false,
                  origins: ['Italian'],
                  star:4.0,
                  imageurl:'/assets/pizzasupreme.jpg' ,
                  tags: ['Cheese Pizza ', 'Pizza'],
                  },
                  
                   
                      {
                        id : 11,
                        name: 'Special Pizza',
                        price: 1800,
                        cookTime: '20-30',
                        favourite: false,
                        origins: ['Pakistani'],
                        star:4.0,
                        imageurl:'/assets/pizzapic1.jpg' ,
                        tags: ['Cheese Pizza ', 'Pizza'],
                        },
                        {
                          id : 12,
                          name: 'Cheese Pizza',
                          price: 1800,
                          cookTime: '20-30',
                          favourite: false,
                          origins: ['Pakistani'],
                          star:4.0,
                          imageurl:'/assets/cheesepizza.jpg' ,
                          tags: ['Cheese Pizza ', 'Pizza'],
                          },
                          {
                            id : 13,
                            name: 'Pizza',
                            price: 1400,
                            cookTime: '20-30',
                            favourite: false,
                            origins: ['Pakistani'],
                            star:4.0,
                            imageurl:'/assets/chickenpizza.jpg' ,
                            tags: ['Pizza ', 'chicken tikka'],
                            },
                            {
                              id : 14,
                              name: 'Tikka Boti',
                              price: 600,
                              cookTime: '20-30',
                              favourite: false,
                              origins: ['Pakistani'],
                              star:4.0,
                              imageurl:'/assets/tikkaboti1.jpg' ,
                              tags: ['Tikka ', 'Tikka Boti', 'BBQ'],
                              },
                              {
                                id : 15,
                                name: 'Gola Kabab',
                                price: 800,
                                cookTime: '20-30',
                                favourite: false,
                                origins: ['Pakistani'],
                                star:4.0,
                                imageurl:'/assets/golakabab.jpg' ,
                                tags: ['Gola Kabab ', 'Kabab', 'BBQ'],
                                },
                                {
                                  id : 16,
                                  name: 'Chargha',
                                  price: 1700,
                                  cookTime: '20-30',
                                  favourite: false,
                                  origins: ['Pakistani'],
                                  star:4.0,
                                  imageurl:'/assets/chargha.jpg' ,
                                  tags: ['Chicken ', 'chargha' , 'BBQ'],
                                }
                              ,
                                {
                                  id : 17,
                                  name: 'Chicken Karahi',
                                  price: 1080,
                                  cookTime: '20-30',
                                  favourite: false,
                                  origins: ['Pakistani'],
                                  star:4.0,
                                  imageurl:'/assets/Chicken-Karahi1.jpg' ,
                                  tags: ['Chicken ', 'Karahi'],
                                  }
                                  ,
                                {
                                  id : 18,
                                  name: 'Special Chicken Karahi',
                                  price: 2000,
                                  cookTime: '20-30',
                                  favourite: false,
                                  origins: ['Pakistani'],
                                  star:4.0,
                                  imageurl:'/assets/special chicken karahi.jpg' ,
                                  tags: ['Chicken ', 'Karahi'],
                                  }
                                  ,
                                {
                                  id : 19,
                                  name: 'Mutton Karahi',
                                  price: 3000,
                                  cookTime: '20-30',
                                  favourite: false,
                                  origins: ['Pakistani'],
                                  star:4.0,
                                  imageurl:'/assets/SpecialMuttonKarahi.jpg' ,
                                  tags: ['Mutton Karahi ', 'Karahi'],
                                  }

                              ]             

}


}
