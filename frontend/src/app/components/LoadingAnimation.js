'use client';

import { useLottie } from 'lottie-react';
import animationData from './../../../public/lottie/loading-plane.json';

export const dynamic = 'force-dynamic';

const LoadingAnimation = ({ isLoading }) => {
  const defaultOptions = {
    loop: true,
    animationData: animationData,
  };

  const { View } = useLottie(defaultOptions);

  if (!isLoading) return null;

  return (
    <div className="flex justify-center items-center bg-white bg-opacity-90 z-[9999]">
      <div className="w-64 h-64">
        {View}
      </div>
    </div>
  );
};

export default LoadingAnimation;