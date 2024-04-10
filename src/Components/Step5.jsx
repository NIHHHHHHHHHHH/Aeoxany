
     
import React from "react";
import { Button } from "@material-tailwind/react";


export default function Step5({onContinue}){
  
 
    return(
   <> 
  
  <div className='flex md:flex-row flex-col justify-evenly items-center md:mt-15 mt-2 mb-10'>
   <img className='w-[35%] h-[30%] md:w-[15%] md:h-[10%]' src="https://images.unsplash.com/photo-1582737068804-2e7d18036fe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
   <div className='flex flex-col gap-1 md:gap-4 basis-2/5'>
       <h1 className='font-bold text-left md:text-xl text-sm pl-4 pt-6'>Your're on your way</h1>
       <h2 className="pl-4">⭐⭐⭐⭐⭐</h2>
             <p className="pl-4 pr-3 font-light text-8xs md:text-xs">
                 "Through its engaging and well-structured courses, Brilliant has taught me
                mathemaical concepts that I previously struggled to understand. i now feel
               confident approaching both technical job iterviews and real world problem
               solving situations."
        </p>        
                    <p className="pl-4 text-8xs md:text-xs">- Jacob S.</p>
   </div>
</div>
<div className='pt-2 md:pt-10 items-center flex justify-center pb-2 px-20'>
        <Button
          className={`md:font-semibold text-7xs md:text-sm px-1 md:px-5 py-2 w-full md:w-28 `}
          onClick={onContinue}
         
        >
          Continue
        </Button>
      </div>
       
      </>
    )
    
}   
     