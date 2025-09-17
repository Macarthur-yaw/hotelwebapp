import PicOne from '../assets/bgOne.jpg'
import PicTwo from '../assets/bgTwo.jpg'
import PicThree from '../assets/bgThree.jpg'
import PicSeven from '../assets/bgFour.jpg'


interface backgroundPictures{
    id:number,
    imageUrl?:string,
    Title:string,
    content:string

}
export  const backgroundPictures:backgroundPictures[]=[
    {id:1,
    imageUrl:PicOne,
    Title:'Find Your Perfect Acommodation Online Today',
    content:'Book your stay with ease and convenience.'
    },
    {
        id:2,
        imageUrl:PicTwo,
        Title:'BOOK US NOW!',
        content:'Enjoy our services at a fee.'
    },
    {
        id:3,
        imageUrl:PicThree,
        Title:'BEST PACKAGES!',
        content:'Make the best of every moment.'
    },
    {
        id:4,
        imageUrl:PicSeven,
        Title:'AFFORDABLE SERVICES.',
        content:'We are very best at serving.'
    }
]