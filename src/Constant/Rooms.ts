import rooms from '../assets/roomss.jpg'
import rooms2 from '../assets/NUMBER-ONE-OXFORD02196.jpeg'
import rooms3 from '../assets/pexels-suhel-vba-3659683.jpg'
import rooms4 from '../assets/pexels-naim-benjelloun-2029698.jpg'

interface Rooms{
    id:number,
    imgUrl:string,
    title:string
}
export const Rooms:Rooms[]=[
    {id:1,
    imgUrl:rooms,
    title:'lorem ipsumeheheh'
    },
    {id:2,
        imgUrl:rooms2,
        title:'lorem ipsumeheheh'
        },
        {id:3,
            imgUrl:rooms3,
            title:'lorem ipsumeheheh'
            }
            ,{id:4,
                imgUrl:rooms4,
                title:'lorem ipsumeheheh'
                },
                {id:5,
                    imgUrl:rooms2,
                    title:'lorem ipsumeheheh'
                    },
                    {id:6,
                        imgUrl:rooms,
                        title:'lorem ipsumeheheh'
                        }
]