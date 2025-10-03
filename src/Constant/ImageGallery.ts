import galleryOne from '../assets/standard1.jpeg';
import galleryTwo from '../assets/standard2.jpeg';
import galleryThree from '../assets/standard3.jpeg';
import galleryFour from '../assets/standard4.jpeg';
import galleryFive from '../assets/gallery3.jpeg';
import gallerySix from '../assets/gallery3.jpeg';
import gallerySeven from '../assets/gallery4.jpeg'
import galleryEight from '../assets/gallery6.jpeg'
import galleryNine from '../assets/gallery4.jpeg'
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