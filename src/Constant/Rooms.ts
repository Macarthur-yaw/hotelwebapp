
import rooms10 from '../assets/standard4.jpeg'
import rooms1 from '../assets/standard1.jpeg'
import rooms2 from '../assets/standard2.jpeg'
import rooms3 from '../assets/standard3.jpeg'
import rooms5 from '../assets/standard4.jpeg'
import rooms12 from '../assets/standard1.jpeg'



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
    content: "Perfect for travelers who want comfort without breaking the bank. The Standard Room offers a cozy atmosphere with essential amenities designed for relaxation after a busy day."
,
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
        content: "Step up your stay with the Executive Room, tailored for both business and leisure. With extra space, modern furnishings, and thoughtful amenities, it strikes the balance between productivity and comfort."
,
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
            imgUrl:'https://res.cloudinary.com/dnwyppsef/image/upload/v1759484151/premi_wzvraa.jpg',
            title:'Premium Room',
            price:600,
            content: "Indulge in our Premium Room — where luxury meets convenience. Enjoy elegant interiors, plush bedding, and upgraded amenities for a stay that feels truly special."
,
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