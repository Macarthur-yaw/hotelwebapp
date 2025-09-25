
import PicSeven from '../assets/bgFour.jpg'


interface backgroundPictures{
    id:number,
    imageUrl?:string,
    Title:string,
    content:string

}
export  const backgroundPictures:backgroundPictures[]=[
    {id:1,
    imageUrl:'https://res.cloudinary.com/dnwyppsef/image/upload/v1758776352/mainbg_zdldmw.jpg',
    Title:'Find Your Perfect Acommodation Online Today',
    content:'Book your stay with ease and convenience.'
    },
    {
        id:2,
        imageUrl:'https://res.cloudinary.com/dnwyppsef/image/upload/v1758776439/bgImage2_kbnif9.jpg',
        Title:'BOOK US NOW!',
        content:'Enjoy our services at a fee.'
    },
    {
        id:3,
        imageUrl:'https://res.cloudinary.com/dnwyppsef/image/upload/v1758776451/bgImage_ssoigr.jpg',
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