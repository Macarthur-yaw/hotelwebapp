import rooms4 from '../assets/roomss.jpg'
import rooms6 from '../assets/NUMBER-ONE-OXFORD02196.jpeg'
import rooms8 from '../assets/pexels-suhel-vba-3659683.jpg'
import rooms10 from '../assets/pexels-naim-benjelloun-2029698.jpg'
import rooms1 from '../assets/rooms1.webp'
import rooms2 from '../assets/rooms2.jpeg'
import rooms3 from '../assets/rooms3.jpeg'
import rooms5 from '../assets/roomss.jpg'
import rooms12 from '../assets/pexels-naim-benjelloun-2029698.jpg'
import rooms13 from '../assets/pexels-suhel-vba-3659683.jpg'


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
    imgUrl:rooms4,
    title:'Executive Room',
    price:200,
    content:"Are you balling on a budget? You don't have to settle our standard room is a cozy choice",
    services:[
{
    id:1,
    content:'2 Double Beds',

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
    content:'Intercom'
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
        imgUrl:rooms6,
        title:'Presidential Suite',
        price:500,
        services:[
            {
                id:1,
                content:'2 Double Beds',
            
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
                content:'Intercom'
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
            imgUrl:rooms8,
            title:'Standard',
            price:150,
            services:[
                {
                    id:1,
                    content:'2 Double Beds',
                
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
                    content:'Intercom'
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
            ,{id:4,
                imgUrl:rooms10,
                title:'Deluxe Room',
                price:300,
                services:[
                    {
                        id:1,
                        content:'2 Double Beds',
                    
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
                        content:'Intercom'
                    }
                        ],
                        items:[
                            {
                                id:1,
                                imgUrl:rooms12
                            },{
                                id:2,
                                imgUrl:rooms13
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
                {id:5,
                    imgUrl:rooms8,
                    title:'Deluxe Room',
                    price:300,

                    services:[
                        {
                            id:1,
                            content:'2 Double Beds',
                        
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
                            content:'Intercom'
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
                    
]