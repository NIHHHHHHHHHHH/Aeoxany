
import React, { useState, useEffect } from "react";
import ProgressBar from "./Components/ProgreesBar";
import Step1 from "./Components/Step1";
import Step2 from "./Components/Step2";
import Step3 from "./Components/Step3";
import Step4 from "./Components/Step4";
import Step5 from "./Components/Step5";
import Step6 from "./Components/Step6";
import Step7 from "./Components/Step7";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleContinue = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  useEffect(() => {
    // If current step is 6, set timeout to change to step 7 after 15 seconds
    if (currentStep === 6) {
      const timeout = setTimeout(() => {
        setCurrentStep(7);
      }, 10000); // 15 seconds in milliseconds

      // Clear the timeout if component unmounts or currentStep changes
      return () => clearTimeout(timeout);
    }
  }, [currentStep]); // Run effect whenever currentStep changes

  return (
    <div>
      {/* Render ProgressBar only if currentStep is not 6 or 7 */}
      {currentStep !== 6 && currentStep !== 7 && (
        <ProgressBar currentStep={currentStep} onBack={handleBack} />
      )}

      {/* Render the appropriate step component based on currentStep */}
      {currentStep === 1 && <Step1 onContinue={handleContinue} />}
      {currentStep === 2 && <Step2 onContinue={handleContinue} />}
      {currentStep === 3 && <Step3 onContinue={handleContinue} />}
      {currentStep === 4 && <Step4 onContinue={handleContinue} />}
      {currentStep === 5 && <Step5 onContinue={handleContinue} />}
      {currentStep === 6 && <Step6 onContinue={handleContinue} />}
      {currentStep === 7 && <Step7 onContinue={handleContinue} />}
    </div>
  );
}

export default App;