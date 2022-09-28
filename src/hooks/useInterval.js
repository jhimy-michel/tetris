import { useEffect, useRef } from 'react';
/**
 * This function was created by Dan Abramov
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */

export function useInterval(callback: unknown, delay: unknown) {
  const savedCallback = useRef();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
}
