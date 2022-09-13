import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getGreetings } from './greetingsReducer'

const Greeting = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.greetings)
  
  useEffect(() => {
    dispatch(getGreetings())
  }, []);

  return (
    <h1>{ state.greeting }</h1>
  );
}

export default Greeting;
