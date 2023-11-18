import rooms4 from '../assets/roomss.jpg'
import rooms6 from '../assets/NUMBER-ONE-OXFORD02196.jpeg'
import rooms8 from '../assets/pexels-suhel-vba-3659683.jpg'
import rooms10 from '../assets/pexels-naim-benjelloun-2029698.jpg'
import rooms1 from '../assets/rooms1.webp'
import rooms2 from '../assets/rooms2.jpeg'
import rooms3 from '../assets/rooms3.jpeg'
import rooms5 from '../assets/roomss.jpg'



interface Rooms{
    id:number,
    imgUrl:string,
    title:string,
    content?:string,
    items?:Array<{
        id: number;
        imgUrl: string;
      }>;

}
export const Rooms:Rooms[]=[
    {id:1,
    imgUrl:rooms4,
    title:'lorem ipsumeheheh',
    content:"Are you balling on a budget? You don't have to settle our standard room is a cozy choice",
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
        title:'lorem ipsumeheheh'
        },
        {id:3,
            imgUrl:rooms8,
            title:'lorem ipsumeheheh'
            }
            ,{id:4,
                imgUrl:rooms10,
                title:'lorem ipsumeheheh'
                },
                {id:5,
                    imgUrl:rooms8,
                    title:'lorem ipsumeheheh'
                    },
                    {id:6,
                        imgUrl:rooms6,
                        title:'lorem ipsumeheheh'
                        }
]