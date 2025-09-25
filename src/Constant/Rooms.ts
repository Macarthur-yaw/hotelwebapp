
import rooms10 from '../assets/pexels-naim-benjelloun-2029698.jpg'
import rooms1 from '../assets/rooms1.webp'
import rooms2 from '../assets/rooms2.jpeg'
import rooms3 from '../assets/rooms3.jpeg'
import rooms5 from '../assets/roomss.jpg'
import rooms12 from '../assets/pexels-naim-benjelloun-2029698.jpg'



interface Rooms{
    id:number,
    imgUrl:string,
    title:string,
    content?:string,
    price:number,
    items?:Array<{
        id: number;
        imgUrl: string;
      }>;
      services?:Array<{
        id:number;
        content:string
      }>

}
export const Rooms:Rooms[]=[
    {id:1,
    imgUrl:'https://res.cloudinary.com/dnwyppsef/image/upload/v1758778459/normal_fgpfo6.jpg',
    title:'Standard Room',
    price:400,
    content:"Are you balling on a budget? You don't have to settle our standard room is a cozy choice",
    services:[
{
    id:1,
    content:'Complementary breakfast',

},{
    id:2,
    content:'Air conditioning'
},{
    id:3,
    content:'Work Desk'
},{
    id:4,
    content:'Breakfast included'
},{
    id:5,
    content:'Television'
},{
    id:6,
    content:'WiFi'
}
    ],
    items:[
        {
            id:1,
            imgUrl:rooms1
        },{
            id:2,
            imgUrl:rooms2
        },{
            id:3,
            imgUrl:rooms3
        },
        {
            id:4,
            imgUrl:rooms5
        }
    
    ]
    },
    {id:2,
        imgUrl:'https://res.cloudinary.com/dnwyppsef/image/upload/v1758778579/standard_qd3an6.jpg',
        title:'Executive Room',
        price:500,
        services:[
            {
                id:1,
                content:'Complementary Breakfast',
            
            },{
                id:2,
                content:'Air conditioning'
            },{
                id:3,
                content:'Work Desk'
            },{
                id:4,
                content:'Breakfast included'
            },{
                id:5,
                content:'Television'
            },{
                id:6,
                content:'Wifi'
            }
                ],
                items:[
                    {
                        id:1,
                        imgUrl:rooms1
                    },{
                        id:2,
                        imgUrl:rooms2
                    },{
                        id:3,
                        imgUrl:rooms3
                    },
                    {
                        id:4,
                        imgUrl:rooms10
                    }
                
                ]
            
        },
        {id:3,
            imgUrl:'https://res.cloudinary.com/dnwyppsef/image/upload/v1758778530/premium_ofocye.jpg',
            title:'Premium Room',
            price:600,
            services:[
                {
                    id:1,
                    content:'Breakfast',
                
                },{
                    id:2,
                    content:'Air conditioning'
                },{
                    id:3,
                    content:'Work Desk'
                },{
                    id:4,
                    content:'Breakfast included'
                },{
                    id:5,
                    content:'Television'
                },{
                    id:6,
                    content:'Wifi'
                }
                    ],
                    items:[
                        {
                            id:1,
                            imgUrl:rooms1
                        },{
                            id:2,
                            imgUrl:rooms2
                        },{
                            id:3,
                            imgUrl:rooms10
                        },
                        {
                            id:4,
                            imgUrl:rooms12
                        }
                    
                    ]
                
        }
            
]