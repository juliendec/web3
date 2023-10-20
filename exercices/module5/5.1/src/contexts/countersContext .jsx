import React, { useState } from "react";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  const [good, setGood] = useState(0);
  const [ok, setOk] = useState(0);
  const [bad, setBad] = useState(0);

  const pickGood = () => {
    let newGood = good + 1;
    setGood(newGood);
  };

  const pickOk = () => {
    let newOk = ok + 1;
    setOk(newOk);
  };

  const pickBad = () => {
    let newBad = bad + 1;
    setBad(newBad);
  };

  const pickReset = () => {
    setGood(0);
    setOk(0);
    setBad(0);
  };

  const exposedValue = {
    good,
    ok,
    bad,
    pickGood,
    pickOk,
    pickBad,
    pickReset,
  };

  return (
    <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  );
};

export { Context, ProviderWrapper };
