import { ImageGallery } from "../Constant/ImageGallery";
const Gallery = () => {
 
    return ( 
        <div className="mt-20 px-4 flex flex-col mb-4 gap-4">
     {
        ImageGallery.map((item)=>(
            <div key={item.id} className={``}>
                <img src={item.imgUrl} alt=""
                
                className={`w-[500px] mx-auto`} />
                </div>
        ))
     }
     
        </div>
     );
}
 
export default Gallery;