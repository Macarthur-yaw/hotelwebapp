import { ServiceCard } from "../Constant/ServiceCard";

const Services = () => {
    return ( 
        <div className="flex flex-col  gap-6 mt-20 p-6">
            {
              ServiceCard.map((item)=>(
                <div key={item.id} className="flex flex-col md:items-start gap-4 md:flex-row">
                    <span className="flex flex-col gap-2 md:w-[50%]">
                        <h1 className="font-medium text-[20px] md:text-[30px]">
                    {item.title}
                    
                        </h1>
                        <h2 className="text-md font-normal text-[15px] md:text-[14px]">{item.content}</h2>
                        </span>

                        <div className="flex flex-col  md:grid md:grid-cols-2 gap-4 md:gap-4"
                        >
                            
                            {item.items?.map((content)=>(

<img src={content.imgUrl} alt="" className="w-full rounded-md md:w-[250px] md:h-[250px] h-[600px]  mx-auto" />
                           
                            ))}</div>
                        <img src={item.imgUrl} className="md:w-[150px]"/>
                    </div>
              ))  
            }
        </div>
     );
}
 
export default Services;