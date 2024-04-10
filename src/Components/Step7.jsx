
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry } from '@fortawesome/free-solid-svg-icons';
import '../App.css';


function Step7() {
 

  return (
    <>
      <div className=' mt-7 md:mt-28'>
        <h1 className='pb-1 text-center text-xs md:text-2xl font-bold'>Learning paths based on your answers</h1>
        <h2 className='pt-3 pb-7 pl-1 text-xs  md:text-sm text-left md:text-center'>Choose one to get started. You can switch anytime</h2>
      </div>
      
 <div class="flex flex-col md:flex-row justify-center mx-3 md:mt-4">
  <div class="relative w-full md:w-1/3 border-gray-200 border-2 text-xs flex items-center font-normal py-2 px-2 mb-2  md:py-4 md:px-4  md:mb-2  md:mr-2 rounded">
  <button className="flex items-center justify-center w-30 overflow-hidden h-3 bg-yellow-700 text-6xs font-bold  absolute top-[-10px] left-1/2 transform -translate-x-1/2 mt-1/3 rounded px-2 py-2 ">
      MOST EXPLORE
    </button>
    <span className='pr-2'><span className='font-bold'>Foundational Math</span> Build your foundational skills in algebra, geometry, and probability.</span>
    <span className='text-7xl ml-auto'><FontAwesomeIcon icon={faIndustry} /></span>
  </div>
  <div class="w-full md:w-1/3 border-gray-200 border-2 text-xs flex items-center font-normal py-2 px-2 mb-2 md:py-4 md:px-4 md:mb-2 rounded">
    <span className='pr-2'><span className='font-bold'>Mathematical Thinking</span> Build your foundational skills in algebra, geometry, and probability.</span>
    <span className='text-7xl ml-auto'><FontAwesomeIcon icon={faIndustry} /></span>
  </div>
</div>
    
    </>
  );
}

export default Step7;













