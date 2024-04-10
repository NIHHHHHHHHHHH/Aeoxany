
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faLaptopFile,faPlus,faBrain,faEye } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@material-tailwind/react";
import '../App.css';

const options = [
  { id: '1', icon: faLaptopFile, text: 'Learning specific skills to avance my career' },
  { id: '2', icon: faEarthAmericas, text: 'Exploring new topcis I\'m interested in' },
  { id: '3', icon: faPlus, text: 'Refreshing my math foundations' },
  { id: '4', icon: faBrain, text: 'Exercising my brain to stay sharp' },
  { id: '5', icon: faEye, text: 'Something else' },
];

export default function Step2({ onContinue }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId);
  };

  return (
    <>
      <div>
        <h1 className='pb-3 text-center font-bold text-xs md:text-xl'>Which are you most interested in?</h1>
        <h2 className='pb-5 text-center text-8xs md:text-sm  text-gray-600'>Choose just one.This will help us get you started(but won't limit your experience).</h2>
      </div>

      <div className="flex flex-col items-center gap-2 p-3">
        {options.map(({ id, icon, text }) => (
          <Button
            key={id}
            className={`border-gray-300 p-1 h-9 w-full  md:w-2/5  font-normal text-6xs md:text-xs  text-left shadow-none ${selectedOption === id ? 'border-yellow-500' : ''}`}
            variant="outlined"
            onClick={() => handleOptionClick(id)}
          >
            <span className='p-3 font-normal pr-1'><span className='pr-2'><FontAwesomeIcon icon={icon} /></span></span>{text}
          </Button>
        ))}
        <div className='pt-2 md:pt-5 items-center flex justify-center pb-2 px-20'>
          <Button
            className={`md:font-semibold text-7xs md:text-sm px-1 md:px-5 py-2 w-full md:w-28 ${selectedOption ? 'opacity-100' : 'opacity-10'} `}
            onClick={selectedOption ? onContinue : null}
            disabled={!selectedOption}
          >
            Continue
          </Button>
        </div>
       
      </div>
    </>
  );
}

