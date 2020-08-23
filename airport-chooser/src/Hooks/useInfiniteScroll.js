import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback, elementId) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    document.getElementById(elementId).addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;