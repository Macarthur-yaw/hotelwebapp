import galleryOne from '../assets/move1.jpeg';
import galleryTwo from '../assets/move2.jpeg';
import galleryThree from '../assets/move3.jpeg';
import galleryFour from '../assets/Gallery4.jpg';
import galleryFive from '../assets/Gallery5.jpg';
import gallerySix from '../assets/Gallery6.jpg';
import gallerySeven from '../assets/pexels-colon-freld-2373201.jpg'
import galleryEight from '../assets/pexels-eduardo-romero-3124079.jpg'
import galleryNine from '../assets/pexels-naim-benjelloun-2029698.jpg'
interface ImageGallery{
    id:number,
    // imgUrl:string,
    imgProps?:Array<{
        id:number,
        imgUrl:string
    }>

}
export const ImageGallery:ImageGallery[]=[
    {
        id:1,
        
        imgProps:[
            {
                id:1,
                imgUrl:galleryOne
            },
            {
                id:2,
                imgUrl:galleryTwo
            },
            {
                id:3,
                imgUrl:galleryThree
            }
        ]
    },{
        id:2,
        
        imgProps:[
            {
                id:1,
                imgUrl:galleryFour
            },
            {
                id:2,
                imgUrl:gallerySix
            },
            {
                id:3,
                imgUrl:gallerySeven
            }
        ]
    },
    {
        id:3,
        imgProps:[
            {
                id:1,
                imgUrl:galleryEight
            },
            {
                id:2,
                imgUrl:galleryNine
            },
            {
                id:3,
                imgUrl:galleryFour
            }
        ]
    },{
        id:4,
        // imgUrl:galleryOne,
        imgProps:[
            {
                id:1,
                imgUrl:galleryFour
            },
            {
                id:2,
                imgUrl:galleryOne
            },
            {
                id:3,
                imgUrl:galleryFive
            }
        ]
    }
]