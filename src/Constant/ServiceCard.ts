import imageOne from '../assets/NUMBER-ONE-OXFORD02196.jpeg'
import imageTwo from '../assets/pexels-eduardo-romero-3124079.jpg'
import imageThree from '../assets/Pres1-1536x1024 (1).jpg'
import imageFive from '../assets/pexels-colon-freld-2373201.jpg'
import imageSix from '../assets/Gallery3.jpg'
import imageSeven from '../assets/Gallery5.jpg'
import imageEight from '../assets/Gallery6.jpg'

interface ServiceCard {
    id: number;
    title: string;
    content:string;
    imgUrl?: string;
    items?: Array<{
      idnum: number;
      imgUrl: string;
    }>;
  }
  

export const ServiceCard :ServiceCard[]= [
    {id:1,
    title:'Restaurant',
    content:'Our restaurant is beautiful, colorful setting where family, friends and individuals can come and receive the royal treatment from our lovely staff. With pleasing sights, amazing smells and great taste our restaurant is the place to be. We will challenge your taste buds, with our amazing flavourful local and continental dishes. All types of drinks your heart may desire are available. With technology we make it easy for you to order and pay for your items. What are you waiting for? Visit our restaurant today!',
     items:[{
        idnum:1,
        imgUrl:imageOne
    },{
        idnum:2,
        imgUrl:imageTwo
    },{
        idnum:3,
        imgUrl:imageThree
    },{
        idnum:4,
        imgUrl:imageFive
    }],
},
{
    id:2,
    title:'Bar',
content:'Our restaurant is beautiful, colorful setting where family, friends and individuals can come and receive the royal treatment from our lovely staff. With pleasing sights, amazing smells and great taste our restaurant is the place to be. We will challenge your taste buds, with our amazing flavourful local and continental dishes. All types of drinks your heart may desire are available. With technology we make it easy for you to order and pay for your items. What are you waiting for? Visit our restaurant today!',

    items:[
        {idnum:1,
        imgUrl:imageSix
        },
        {
            idnum:2,
            imgUrl:imageSeven
        },{
            idnum:3,
            imgUrl:imageEight
        }
    ]
},
{
    id:3,
    title:'Gym',
    content:'Our restaurant is beautiful, colorful setting where family, friends and individuals can come and receive the royal treatment from our lovely staff. With pleasing sights, amazing smells and great taste our restaurant is the place to be. We will challenge your taste buds, with our amazing flavourful local and continental dishes. All types of drinks your heart may desire are available. With technology we make it easy for you to order and pay for your items. What are you waiting for? Visit our restaurant today!',

    imgUrl:imageOne
},{
    id:4,
    title:'Swimming Pool',
    content:'Our restaurant is beautiful, colorful setting where family, friends and individuals can come and receive the royal treatment from our lovely staff. With pleasing sights, amazing smells and great taste our restaurant is the place to be. We will challenge your taste buds, with our amazing flavourful local and continental dishes. All types of drinks your heart may desire are available. With technology we make it easy for you to order and pay for your items. What are you waiting for? Visit our restaurant today!',
    imgUrl:imageEight
}

]