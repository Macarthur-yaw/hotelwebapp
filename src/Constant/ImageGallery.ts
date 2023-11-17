import galleryOne from '../assets/Gallery1.jpg';
import galleryTwo from '../assets/Gallery2.jpg';
import galleryThree from '../assets/Gallery3.jpg';
import galleryFour from '../assets/Gallery4.jpg';
import galleryFive from '../assets/Gallery5.jpg';
import gallerySix from '../assets/Gallery6.jpg';
interface ImageGallery{
    id:number,
    imgUrl:string
}
export const ImageGallery:ImageGallery[]=[
    {
        id:1,
        imgUrl:galleryOne
    },{
        id:2,
        imgUrl: galleryTwo
    },{
        id:3,
        imgUrl:galleryThree
    }
    ,{
        id:4,
        imgUrl:galleryFour
    },
    {
        id:5,
        imgUrl:galleryFive
    },
    {
        id:6,
        imgUrl:gallerySix
    }
]