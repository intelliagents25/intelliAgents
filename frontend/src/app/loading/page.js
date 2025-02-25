'use client';
import { useEffect, useState } from 'react';
import { useLottie } from 'lottie-react';

const LoadingPage = () => {

  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/lottie/loading-plane.json')
      .then(response => response.json())
      .then(data => setAnimationData(data));
  }, []);

  const defaultOptions = {
    loop: true,
    animationData: animationData,
  };

  const { View } = useLottie(defaultOptions);

  // TODO: need to set if condition to render loading only when a bool is true
  // if (!isLoading) return null;    

  return (
    <div className='w-full flex justify-center items-center h-screen'>
      {View}
    </div>
  );

};

export default LoadingPage;