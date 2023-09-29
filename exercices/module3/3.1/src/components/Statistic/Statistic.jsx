import StatisticLine from '../StatisticLine/StatisticLine';

const Statistic = ({good, neutral, bad}) => {
    const all = good+neutral+bad;
    const positive =  (good / all) * 100;
    const average = (good - bad) / all;

    if(good === 0 && neutral === 0 && bad === 0){
        return (
            <div>
                <h4>No feedback given</h4>
            </div>
        )
    } else {
        return (
            <div>
                <StatisticLine text="good" value ={good} />
                <StatisticLine text="neutral" value ={neutral} />
                <StatisticLine text="bad" value ={bad} />
                <StatisticLine text="average" value ={average} />
                <StatisticLine text="positive" value ={positive} />
                <StatisticLine text="all" value ={all} />
            </div>
        )
    }
    
}


  export default Statistic 