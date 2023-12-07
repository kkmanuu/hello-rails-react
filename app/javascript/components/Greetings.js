import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetings/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.greeting);
  const status = useSelector((state) => state.greetings.status);
  const error = useSelector((state) => state.greetings.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchGreetings());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;