'use client';

import { useLottie } from 'lottie-react';
import animationData from './../../../public/lottie/loading-plane.json';

export const dynamic = 'force-dynamic';
const LoadingAnimation = () => {

  const defaultOptions = {
    loop: true,
    animationData: animationData,
  };

  const { View } = useLottie(defaultOptions);

  // TODO: need to set if condition to render loading only when a bool is true
  // if (!isLoading) return null;    

  return (
    <div className='flex justify-center items-center'>
      {View}
    </div>
  );

};

export default LoadingAnimation;