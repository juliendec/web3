import Button from './components/Button/Button';
import Loading from './components/Loading/Loading';
import Statistics from './components/Statistic/Statistic';
import { useState } from 'react';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  setTimeout(() => setLoading(true), 3000);

  const handleClick = (e) => {
    if (e.target.className === 'good'){
      setGood(good + 1);
    }
    else if (e.target.className === 'neutral'){
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
  };
  

  if (!loading) {
    return <Loading message="Chargement en cours..."/>;
  } else {
    return (
      <div>
        <h1>give feedback</h1>
        <Button onClick={handleClick} text="good" />
        <Button onClick={handleClick} text="neutral" />
        <Button onClick={handleClick} text="bad" />
  
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }

};

export default App;
