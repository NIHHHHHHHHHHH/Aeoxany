
import React from 'react';
import { Progress } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function ProgressBar({ currentStep, onBack }) {
    const progress = currentStep * 20;

    const handleBack = () => {
        if (currentStep > 1) {
            onBack(); // Call the callback function provided by the parent component
        }
    };

    return (
        <div className="px-4 md:px-24 py-6 flex items-center">
            {currentStep > 1 && ( // Only render the button if currentStep is greater than 1
                <button className='mr-2' onClick={handleBack}><FontAwesomeIcon icon={faAngleLeft} /></button>
            )}
            <Progress className='h-1' size='sm' value={progress} color="green" />
        </div>
    );
}

export default ProgressBar;

