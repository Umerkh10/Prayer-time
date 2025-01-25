import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const CustomSkeleton = () => {
  return (
    <div className='px-8 mt-4'> 
      <Skeleton  className="h-96 w-full" />
      <Skeleton className="mt-3 h-32 rounded-lg w-full" />
      <div className='flex items-center justify-center gap-2 mt-4'>
      <Skeleton  className="h-screen w-full" />
      </div>
    </div>
  )
}

export default CustomSkeleton;