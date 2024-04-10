
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUserTie, faHandsHoldingChild, faHeartPulse, faPersonChalkboard, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@material-tailwind/react";
import '../App.css';

const options = [
  { id: 'student', icon: faGraduationCap, text1: 'Student',text2:'or soon to be enrolled' },
  { id: 'professional', icon: faUserTie, text1: 'Professional',text2:'pursuing a career' },
  { id: 'parent', icon: faHandsHoldingChild, text1: 'Parent',text2:'of a school-age child' },
  { id: 'lifelong', icon: faHeartPulse, text1: 'Lifelong learner' },
  { id: 'teacher', icon: faPersonChalkboard, text1: 'Teacher' },
  { id: 'other', icon: faNetworkWired, text1: 'Other' },
];

export default function Step1({ onContinue }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId);
  };

  return (
    <>
      <div>
        <h1 className='pb-3 text-center font-bold text-sm md:text-xl '>Which describes You best?</h1>
        <h2 className='pb-5 text-center text-8xs   md:text-sm  text-gray-600'>This will help us personalize your experience</h2>
      </div>

      <div className="flex flex-col items-center gap-2 p-2 md:p-3">
        {options.map(({ id, icon, text1,text2 }) => (
          <Button
            key={id}
            className={`border-gray-300 p-1  h-9 w-full  md:w-2/5  text:xs md:text-sm  font-normal text-left shadow-none normal-case ${selectedOption === id ? 'border-yellow-500' : ''}`}
            variant="outlined"
            onClick={() => handleOptionClick(id)}
          >
            <span className='p-3'><FontAwesomeIcon icon={icon} /></span>
    <span className="font-normal pr-1">{text1}</span>
    <span className="text-gray-500">{text2}</span>
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

