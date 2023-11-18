import { useParams } from "react-router-dom";
// import { RoomCards } from "../Components/RoomCards";
const Roompage = () => {
    const {id}= useParams();
    console.log(id);


    return (  
        <div>
            Welcome to Room page 
            
        </div>
    );
}
 
export default Roompage;