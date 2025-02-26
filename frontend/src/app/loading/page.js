'use client';
import { useLottie } from 'lottie-react';
import animationData from './../../../public/lottie/loading-plane.json';

const LoadingPage = () => {

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