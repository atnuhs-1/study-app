// src/components/Skeleton.tsx
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface SkeletonProps {
  count: number;
}

export default function Skeletons({count}: SkeletonProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg-grid-cols-5 gap-1">
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton className='aspect-video w-[290px]'/>
      ))}
      {/* <Skeleton className='w-[290px] h-[163px]'/> */}
    </div>
  )
}