import React, {useState, useEffect} from 'react';

export const Greeting = () => {
  const [greeting, setGreeting] = useState('');
  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 12) {
      setGreeting('Good Morning');
    } else if (hours >= 12 && hours <= 17) {
      setGreeting('Good Afternoon');
    } else if (hours >= 17 && hours <= 24) {
      setGreeting('Good Evening');
    }
  }, [greeting]);

  return <>{greeting}</>;
};
