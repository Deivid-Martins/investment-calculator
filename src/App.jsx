import { useState } from 'react';
import { Header } from './components/Header';
import { UserInput } from './components/UserInput';
import { Results } from './components/Results';

const INITIAL_VALUES = {
  initialInvestment: 10_000,
  annualInvestment: 1_200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(INITIAL_VALUES);

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      {inputIsValid === false && (
        <p className="center">Please, insert valid informations</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
