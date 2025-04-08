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

  if (!isLoading) {return <></>};

  return (
    <div className="flex h-full justify-center items-center bg-opacity-90 z-[9999]">
      <div className="w-64 h-64">
        {View}
      </div>
    </div>
  );
};

export default LoadingAnimation;