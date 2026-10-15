import { Square, SquareMenu, X } from "lucide-react";
import { useState } from "react";

const Navegation = () => {
    const [isOpen, setIsOpen] = useState(false);  
    return (
        
         <div>
        <div className='flex justify-between items-center p-4 '>
          <div className="flex flex-col gap-4">
            <div>
                <button onClick={() => setIsOpen(!isOpen)}className="md:hidden">
           { isOpen ?  <X /> :<SquareMenu/>}
        </button>
        </div>
        
          </div>
           <div><img src="./logo-text.png" alt="" /></div>
           <div className="hidden md:block">
        <ul className='flex gap-4 cursor-pointer my-[10px]mx-[10px]'>
             <li className=" text-pink-600 text-[15px]">Home</li>
             <li>Technologies</li>
             <li>Projects</li>
             <li>About</li>
             <li>Contact</li>
           </ul></div>
           <div className='flex gap-4 cursor-pointer'>
           <button className="cursor-pointer">Sign In</button>
           <button className="bg-pink-600 text-white text-[15px] font-bold px-3 py-1 rounded-full shadow-md hover:bg-pink-700 transition cursor-pointer">Sign up</button>
           </div> 
        </div>
       
         {isOpen && (<ul className="flex flex-col items-start gap-3 pl-3 cursor-pointer"> <li className=" text-pink-600 text-[15px]">Home</li>
             <li>Technologies</li>
             <li>Projects</li>
             <li>About</li>
             <li>Contact</li>
           </ul>)} </div>
        
    );
};

export default Navegation;