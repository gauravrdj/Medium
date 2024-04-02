import { Quote } from "../components/Quote";
import { Auth } from "../components/Auth";



export function Signup(){
    return (
       <>
       <div className="grid grid-cols-1 lg:grid-cols-2">
        <Auth type="signup"/>
       
       <div className="invisible lg:visible">
       <Quote></Quote>
       </div>
       </div>
       </>
    );
}