import { useState, useEffect } from 'react';

export function useMyHook(): [number, Function] {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`count is ${count}`);
  }, [count]);

  return [count, setCount];
}