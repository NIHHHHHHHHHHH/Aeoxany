


import React, { useState } from 'react';
import Latex from 'react-latex';
import 'katex/dist/katex.min.css';
import { Button } from "@material-tailwind/react";

const levels = [
  { id: 'introductory', title: 'Arithmetic', subtitle: 'Introductory', equation: '$5 \\times \\frac{1}{2} = ?$' },
  { id: 'foundational', title: 'Basic Algebra', subtitle: 'Foundational', equation: '$3x + 5 = 4$' },
  { id: 'intermediate', title: 'Intermediate Algebra', subtitle: 'Intermediate', equation: '$x =\\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$' },
  { id: 'advanced', title: 'Calculus', subtitle: 'Advanced', equation: '$\\int_0^L x^2dx = ?$' },
];

export default function Step4({ onContinue }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleSelectLevel = (levelId) => {
    setSelectedLevel(levelId);
    setSelectedOption(levelId); // Update selectedOption when selecting a level
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-xs md:text-xl text-center font-bold mb-4">What is your math comfort level?</h1>
        <p className="mb-2 md:mb-8 text-left md:text-center text-8xs md:text-sm">Choose the highest level you feel confident in — you can always adjust later.</p>
      </div>
      <div className="w-full flex md:flex-row flex-col justify-center items-center gap-2 px-4 mt-1 md:mt-3">
        {levels.map((level) => (
          <Button
            key={level.id}
            className={`w-full md:w-1/5  border-gray-200 rounded-md gap-2 items-center flex flex-col justify-center text-left normal-case shadow-none ${
              selectedLevel === level.id ? 'border-yellow-500 ' : 'border-gray-300'
            }`}
            variant="outlined"
            onClick={() => handleSelectLevel(level.id)}
          >
            <Latex>{level.equation}</Latex>
            <div className="text-8xs md:text-xs font-normal md:3 md:pt-6">{level.title}</div>
            <div className="text-8xs md:text-xs font-normal text-gray-500 pt-0 md:pt-2">{level.subtitle}</div>
          </Button>
        ))}
      </div>
      <div className='pt-2 md:pt-10 items-center flex justify-center pb-2 px-20'>
        <Button
          className={`md:font-semibold text-7xs md:text-sm px-1 md:px-5 py-2 w-full md:w-28 ${selectedOption ? 'opacity-100' : 'opacity-10'} `}
          onClick={selectedOption ? onContinue : null}
          disabled={!selectedOption}
        >
          Continue
        </Button>
      </div>
    </>
  );
}

