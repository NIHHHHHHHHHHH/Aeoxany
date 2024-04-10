import React from "react";
import { Button } from "@material-tailwind/react";


export default function Step3({onContinue}){
  

    return(
   <> 

  <div className='flex md:flex-row flex-col justify-evenly items-center  md:mt-15 mt-2 mb-10'>
   <img className=' w-[40%] md:w-[20%]' src="https://images.unsplash.com/photo-1652974281157-3406722410b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDM4fHx8ZW58MHx8fHx8" alt="" />
   <div className='flex flex-col gap-5 basis-2/5'>
       <p className='font-bold  text-left text-lg md:text-xl pt-2 pl-3 '>You're in the right place</p>
       <p className='text-7xs md:text-xs text-left  px-2'>Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</p>
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
     
     
 